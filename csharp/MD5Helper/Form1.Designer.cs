namespace MD5Helper
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
            this.components = new System.ComponentModel.Container();
            this.tb_pwd = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.toolTip1 = new System.Windows.Forms.ToolTip(this.components);
            this.tb_username = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.btn_change_pwd = new System.Windows.Forms.Button();
            this.richTextBox1 = new System.Windows.Forms.RichTextBox();
            this.SuspendLayout();
            // 
            // tb_pwd
            // 
            this.tb_pwd.Location = new System.Drawing.Point(64, 65);
            this.tb_pwd.Name = "tb_pwd";
            this.tb_pwd.Size = new System.Drawing.Size(216, 21);
            this.tb_pwd.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 68);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 12);
            this.label1.TabIndex = 2;
            this.label1.Text = "密码:";
            // 
            // toolTip1
            // 
            this.toolTip1.IsBalloon = true;
            // 
            // tb_username
            // 
            this.tb_username.Location = new System.Drawing.Point(64, 22);
            this.tb_username.Name = "tb_username";
            this.tb_username.Size = new System.Drawing.Size(216, 21);
            this.tb_username.TabIndex = 0;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(11, 25);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(47, 12);
            this.label3.TabIndex = 2;
            this.label3.Text = "用户名:";
            // 
            // btn_change_pwd
            // 
            this.btn_change_pwd.Location = new System.Drawing.Point(286, 22);
            this.btn_change_pwd.Name = "btn_change_pwd";
            this.btn_change_pwd.Size = new System.Drawing.Size(87, 64);
            this.btn_change_pwd.TabIndex = 11;
            this.btn_change_pwd.Text = "密码加密";
            this.btn_change_pwd.UseVisualStyleBackColor = true;
            this.btn_change_pwd.Click += new System.EventHandler(this.btn_change_pwd_Click);
            // 
            // richTextBox1
            // 
            this.richTextBox1.Location = new System.Drawing.Point(14, 104);
            this.richTextBox1.Name = "richTextBox1";
            this.richTextBox1.ReadOnly = true;
            this.richTextBox1.Size = new System.Drawing.Size(359, 103);
            this.richTextBox1.TabIndex = 12;
            this.richTextBox1.Text = "问题：新版本密码会加密，导致无法使用原先的账号密码登陆。\n\n修复：填上用户名密码，点击\"密码加密\"按钮后再登陆游戏即可。\n\n注：只对内网156有效，每个账号只需要" +
    "并且只能使用一次。";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(382, 224);
            this.Controls.Add(this.richTextBox1);
            this.Controls.Add(this.btn_change_pwd);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.tb_username);
            this.Controls.Add(this.tb_pwd);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "princess密码修改工具";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox tb_pwd;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ToolTip toolTip1;
        private System.Windows.Forms.TextBox tb_username;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btn_change_pwd;
        private System.Windows.Forms.RichTextBox richTextBox1;
    }
}

