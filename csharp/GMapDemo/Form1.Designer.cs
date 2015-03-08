namespace GMapDemo
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.bigMap = new GMap.NET.WindowsForms.GMapControl();
            this.panel1 = new System.Windows.Forms.Panel();
            this.smallMap = new GMap.NET.WindowsForms.GMapControl();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // bigMap
            // 
            this.bigMap.Bearing = 0F;
            this.bigMap.CanDragMap = true;
            this.bigMap.Dock = System.Windows.Forms.DockStyle.Fill;
            this.bigMap.EmptyTileColor = System.Drawing.Color.Navy;
            this.bigMap.GrayScaleMode = false;
            this.bigMap.HelperLineOption = GMap.NET.WindowsForms.HelperLineOptions.DontShow;
            this.bigMap.LevelsKeepInMemmory = 5;
            this.bigMap.Location = new System.Drawing.Point(0, 0);
            this.bigMap.MarkersEnabled = true;
            this.bigMap.MaxZoom = 18;
            this.bigMap.MinZoom = 1;
            this.bigMap.MouseWheelZoomType = GMap.NET.MouseWheelZoomType.MousePositionAndCenter;
            this.bigMap.Name = "bigMap";
            this.bigMap.NegativeMode = false;
            this.bigMap.PolygonsEnabled = true;
            this.bigMap.RetryLoadTile = 0;
            this.bigMap.RoutesEnabled = true;
            this.bigMap.ScaleMode = GMap.NET.WindowsForms.ScaleModes.Integer;
            this.bigMap.SelectedAreaFillColor = System.Drawing.Color.FromArgb(((int)(((byte)(33)))), ((int)(((byte)(65)))), ((int)(((byte)(105)))), ((int)(((byte)(225)))));
            this.bigMap.ShowTileGridLines = false;
            this.bigMap.Size = new System.Drawing.Size(821, 634);
            this.bigMap.TabIndex = 0;
            this.bigMap.Zoom = 2D;
            // 
            // panel1
            // 
            this.panel1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panel1.Controls.Add(this.smallMap);
            this.panel1.Cursor = System.Windows.Forms.Cursors.Default;
            this.panel1.Location = new System.Drawing.Point(516, 420);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(305, 214);
            this.panel1.TabIndex = 1;
            // 
            // smallMap
            // 
            this.smallMap.Bearing = 0F;
            this.smallMap.CanDragMap = true;
            this.smallMap.Dock = System.Windows.Forms.DockStyle.Fill;
            this.smallMap.EmptyTileColor = System.Drawing.Color.Navy;
            this.smallMap.GrayScaleMode = false;
            this.smallMap.HelperLineOption = GMap.NET.WindowsForms.HelperLineOptions.DontShow;
            this.smallMap.LevelsKeepInMemmory = 5;
            this.smallMap.Location = new System.Drawing.Point(0, 0);
            this.smallMap.MarkersEnabled = true;
            this.smallMap.MaxZoom = 20;
            this.smallMap.MinZoom = 1;
            this.smallMap.MouseWheelZoomType = GMap.NET.MouseWheelZoomType.MousePositionAndCenter;
            this.smallMap.Name = "smallMap";
            this.smallMap.NegativeMode = false;
            this.smallMap.PolygonsEnabled = true;
            this.smallMap.RetryLoadTile = 0;
            this.smallMap.RoutesEnabled = true;
            this.smallMap.ScaleMode = GMap.NET.WindowsForms.ScaleModes.Integer;
            this.smallMap.SelectedAreaFillColor = System.Drawing.Color.FromArgb(((int)(((byte)(33)))), ((int)(((byte)(65)))), ((int)(((byte)(105)))), ((int)(((byte)(225)))));
            this.smallMap.ShowTileGridLines = false;
            this.smallMap.Size = new System.Drawing.Size(303, 212);
            this.smallMap.TabIndex = 0;
            this.smallMap.Zoom = 5D;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(821, 634);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.bigMap);
            this.Name = "Form1";
            this.Text = "GMapDemo";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private GMap.NET.WindowsForms.GMapControl bigMap;
        private System.Windows.Forms.Panel panel1;
        private GMap.NET.WindowsForms.GMapControl smallMap;

    }
}

