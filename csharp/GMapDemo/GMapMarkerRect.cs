using System;
using System.Collections.Generic;
using System.Text;
using System.Drawing;
using GMap.NET.WindowsForms;
using GMap.NET;


namespace GMapDemo
{
    public class GMapMarkerRect : GMapMarker
    {
        public Pen Pen;

        public GMapMarkerRect(PointLatLng p)
            : base(p)
        {
            Pen = new Pen(Brushes.Red, 5);

            // do not forget set Size of the marker
            // if so, you shall have no event on it ;}
            Size = new Size(80, 60);
        }

        public override void OnRender(Graphics g)
        {
           // g.DrawRectangle(Pen, new System.Drawing.Rectangle(LocalPosition.X - Size.Width / 2, LocalPosition.Y - Size.Height / 2, Size.Width, Size.Height));
            g.DrawRectangle(Pen, new System.Drawing.Rectangle(LocalPosition.X, LocalPosition.Y , Size.Width, Size.Height));
        }
    }
}
