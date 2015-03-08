using GMap.NET;
using GMap.NET.MapProviders;
using GMap.NET.WindowsForms;
using GMap.NET.WindowsForms.Markers;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Text;
using System.Windows.Forms;


namespace GMapDemo
{
    /// <summary>
    /// GMap.Net 库使用Demo
    /// 日期：2014年10月14日
    /// 作者：于小懒
    /// 
    /// 说明：marker宏定义部分为演示默认marker和用户自定marker的使用方法 
    ///     刚入门时候先关闭MARKER宏 不影响执行 以便能看到最简单地图加载和操作逻辑。
    /// </summary>
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        PointLatLng center = new PointLatLng(40, 118);

#if MARKER

        /// <summary>
        /// 放marker的层
        /// </summary>
        GMapOverlay markersOverlay;

        /// <summary>
        /// google marker
        /// </summary>
        GMarkerGoogle marker;

        /// <summary>
        /// 自定义 marker
        /// </summary>
        GMapMarkerRect rectMarker;

        //拖拽rectMarker 时候的补差.
        //rectMarker以中心点为准定坐标 如果没选到中心点拖拽就会产生问题 矩形框中心点会一下跳到鼠标所在位置。
        private PointLatLng _drag_fix_offset = new PointLatLng();
#endif
        private void Form1_Load(object sender, EventArgs e)
        {
            //GMap.NET.GMaps.Instance.Mode = GMap.NET.AccessMode.ServerOnly;

            /**
             * 用两个GMapControl创建一大一小两个地图
             * 拖动大地图，影响小地图。
             **/

            InitSmallMap();
            InitBigMap();
        }

        /// <summary>
        /// 初始化小地图
        /// </summary>
        public void InitSmallMap()
        {
            smallMap.MapProvider = GMapProviders.GoogleChinaMap;
            smallMap.MinZoom = 0;
            smallMap.MaxZoom = 18;
            smallMap.Zoom = 10;
            smallMap.Position = center;
        }

        /// <summary>
        /// 初始化大地图
        /// </summary>
        public void InitBigMap()
        {

            bigMap.MapProvider = GMapProviders.GoogleChinaMap;
            bigMap.MinZoom = 0;
            bigMap.MaxZoom = 18;
            bigMap.Zoom = 8;
            bigMap.Position = center;

            bigMap.MouseMove += gmap_MouseMove;
            bigMap.MouseDown += gmap_MouseDown;
            bigMap.MouseUp += bigMap_MouseUp;

#if MARKER
            bigMap.OnMarkerEnter += bigMap_OnMarkerEnter;
            bigMap.OnMarkerLeave += bigMap_OnMarkerLeave;

            markersOverlay = new GMapOverlay("markers");
            marker = new GMarkerGoogle(center, GMarkerGoogleType.green);

            //overlay 上可以有很多 marker
            markersOverlay.Markers.Add(marker);
            markersOverlay.Markers.Add(new GMapMarkerRect(center));
            bigMap.Overlays.Add(markersOverlay);
#endif
        }

#if MARKER
        void bigMap_OnMarkerLeave(GMapMarker item)
        {
            if (item is GMapMarkerRect)
            {
                rectMarker = null;

                GMapMarkerRect rc = item as GMapMarkerRect;
                rc.Pen.Color = Color.Green;

                Debug.WriteLine("OnMarkerLeave: " + item.Position);
            }
        }

        void bigMap_OnMarkerEnter(GMapMarker item)
        {
            if (item is GMapMarkerRect)
            {
                GMapMarkerRect rc = item as GMapMarkerRect;
                rc.Pen.Color = Color.Red;

                rectMarker = rc;

                Debug.WriteLine("OnMarkerEnter: " + item.Position);
            }
        }
#endif

        //鼠标是否按下
        bool isMouseDown = false;

        void gmap_MouseDown(object sender, MouseEventArgs e)
        {
#if MARKER
            PointLatLng pos = bigMap.FromLocalToLatLng(e.X, e.Y);//x,y -> 经纬度

            if (rectMarker != null)
            {
                _drag_fix_offset = new PointLatLng(rectMarker.Position.Lat - pos.Lat, rectMarker.Position.Lng - pos.Lng);
            }
            else {
                marker.Position = pos;
            }
#endif
            if (e.Button == MouseButtons.Left)
            {
                isMouseDown = true;
            }
        }


        void bigMap_MouseUp(object sender, MouseEventArgs e)
        {
#if MARKER
            _drag_fix_offset = new PointLatLng();
#endif
        }

        private void gmap_MouseMove(object sender, MouseEventArgs e)
        {
            bool isDragging = e.Button == MouseButtons.Left && isMouseDown;
            if (isDragging)
            {

                PointLatLng pos = bigMap.FromLocalToLatLng(e.X, e.Y);//x,y -> 经纬度
#if MARKER
                if (rectMarker == null)
                {
                    if (marker.IsVisible)
                    {
                        marker.Position = pos;
                    }
                }
                else
                {

                    smallMap.Position = pos;

                    if (rectMarker.IsVisible)
                    {
                        rectMarker.Position = new PointLatLng(pos.Lat + _drag_fix_offset.Lat, pos.Lng + _drag_fix_offset.Lng);
                    }
                }
#else
                smallMap.Position = pos;
#endif
                //smallMap.Refresh();
                //bigMap.Refresh();
            }
        }
    }
}