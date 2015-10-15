namespace MD5Helper
{
    partial class CryptoTest
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
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.tableLayoutPanel2 = new System.Windows.Forms.TableLayoutPanel();
            this.tbSrc = new System.Windows.Forms.TextBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.btnMd5 = new System.Windows.Forms.Button();
            this.tbDest = new System.Windows.Forms.TextBox();
            this.tableLayoutPanel1.SuspendLayout();
            this.tableLayoutPanel2.SuspendLayout();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 72.47191F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 111F));
            this.tableLayoutPanel1.Controls.Add(this.tableLayoutPanel2, 0, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 1;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 30.82524F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(712, 412);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // tableLayoutPanel2
            // 
            this.tableLayoutPanel2.ColumnCount = 1;
            this.tableLayoutPanel2.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel2.Controls.Add(this.tbSrc, 0, 0);
            this.tableLayoutPanel2.Controls.Add(this.panel1, 0, 1);
            this.tableLayoutPanel2.Controls.Add(this.tbDest, 0, 2);
            this.tableLayoutPanel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel2.Location = new System.Drawing.Point(3, 3);
            this.tableLayoutPanel2.Name = "tableLayoutPanel2";
            this.tableLayoutPanel2.RowCount = 3;
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 40F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel2.Size = new System.Drawing.Size(595, 406);
            this.tableLayoutPanel2.TabIndex = 0;
            // 
            // tbSrc
            // 
            this.tbSrc.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tbSrc.Location = new System.Drawing.Point(3, 3);
            this.tbSrc.Multiline = true;
            this.tbSrc.Name = "tbSrc";
            this.tbSrc.Size = new System.Drawing.Size(589, 177);
            this.tbSrc.TabIndex = 2;
            this.tbSrc.Text = "原字符串";
            this.tbSrc.Enter += new System.EventHandler(this.tbSrc_Enter);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.btnMd5);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(3, 186);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(589, 34);
            this.panel1.TabIndex = 0;
            // 
            // btnMd5
            // 
            this.btnMd5.Location = new System.Drawing.Point(6, 3);
            this.btnMd5.Name = "btnMd5";
            this.btnMd5.Size = new System.Drawing.Size(47, 23);
            this.btnMd5.TabIndex = 0;
            this.btnMd5.Text = "md5↓";
            this.btnMd5.UseVisualStyleBackColor = true;
            this.btnMd5.Click += new System.EventHandler(this.btnMd5_Click);
            // 
            // tbDest
            // 
            this.tbDest.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tbDest.Location = new System.Drawing.Point(3, 226);
            this.tbDest.Multiline = true;
            this.tbDest.Name = "tbDest";
            this.tbDest.Size = new System.Drawing.Size(589, 177);
            this.tbDest.TabIndex = 1;
            this.tbDest.Text = "加密后字符串";
            // 
            // CryptoTest
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(712, 412);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Name = "CryptoTest";
            this.Text = "CryptoTest";
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel2.ResumeLayout(false);
            this.tableLayoutPanel2.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel2;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button btnMd5;
        private System.Windows.Forms.TextBox tbDest;
        private System.Windows.Forms.TextBox tbSrc;
    }
}