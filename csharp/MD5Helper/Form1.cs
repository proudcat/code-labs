using System;
using System.Linq;
using System.Windows.Forms;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Net;

namespace MD5Helper
{
    public partial class Form1 : Form
    {

        static string GetMd5Hash(string input)
        {
            using (MD5 md5Hash = MD5.Create())
            {
                // Convert the input string to a byte array and compute the hash. 
                byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
                StringBuilder sBuilder = new StringBuilder();


                // Loop through each byte of the hashed data  
                // and format each one as a hexadecimal string. 
                for (int i = 0; i < data.Length; i++)
                {
                    sBuilder.Append(data[i].ToString("X2"));//
                }

                return sBuilder.ToString();
            }

        }

        public bool Parse(string host)
        {
            IPAddress ipAddress;

            return IPAddress.TryParse(host, out ipAddress);
            //if (!)
            //{
            //    ipAddress = Dns.GetHostEntry(host).AddressList[0];
            //}
        }

        public Form1()
        {
            InitializeComponent();

            string clientProto = File.ReadAllText(@"E:\github\code-labs\nodejs\src\clientProtos.json");
            string serverProto = File.ReadAllText(@"E:\github\code-labs\nodejs\src\serverProtos.json");

            //Regex regex = new Regex(@"\r\n", RegexOptions.IgnoreCase);


            //string proto = SimpleJson.SimpleJson.EscapeToJavascriptString(clientProto + serverProto);
            //string proto = regex.Replace(clientProto + serverProto,"");
            string proto = SimpleJson.SimpleJson.Minify(clientProto + serverProto);//Regex.Replace(clientProto + serverProto, "(\"(?:[^\"\\\\]|\\\\.)*\")|\\s+", "$1");
            MessageBox.Show(proto);

            // Console.WriteLine(proto);

            // File.WriteAllText(@"E:\github\code-labs\nodejs\src\fuck_cs.txt",proto);

            MD5 md5Hash = MD5.Create();
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes("abcdefg"));
            Console.WriteLine("base64:" + Convert.ToBase64String(data));

            data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes("abcdefg"));
            Console.WriteLine("base64:" + Convert.ToBase64String(data));
            //Console.WriteLine("md5:" + GetMd5Hash(proto));


            //StringBuilder sb = new StringBuilder();

            // Loop through each byte of the hashed data  
            // and format each one as a hexadecimal string. 
            //for (int i = 0; i < data.Length; i++)
            //{
            //    sb.Append(data[i].ToString("X2"));//
            //}


            //Console.WriteLine(sb.ToString());

            //MessageBox.Show(md5);
            //Console.Write(md5);
            //GtpGfKIQDuGMFVv6aHqvaw==
            //bIbrEazKE/7bn/IGazUVVg==
        }

        private string url = "mongodb://princess:sin30=0.5@192.168.0.155:27010,192.168.0.156:27010,192.168.0.157:27010/princessAuth";

        private void ChangePassword(string userName, string pwd)
        {
            var client = new MongoClient(url);

            var db = client.GetServer().GetDatabase("princessAuth");
            var collection = db.GetCollection<BsonDocument>("users");
            var document = collection.Find(Query.EQ("account", userName)).ToList();

            if (document.Count > 0)
            {
                var user = document[0];

                if (string.Equals(pwd, user["password"].ToString()))
                {
                    string pwd_md5 = HashHelper.GetMd5Hash(pwd);
                    user["password"] = pwd_md5;
                    WriteConcernResult result = collection.Update(Query.EQ("_id", user["_id"]), new UpdateDocument(user));
                    if (result.Ok)
                    {
                        MessageBox.Show("修改成功！");
                    }
                    else
                    {
                        MessageBox.Show("修改失败！");
                    }
                }
                else
                {
                    MessageBox.Show("密码错误");
                }
            }
            else
            {
                MessageBox.Show("无此用户名");
            }
        }

        private void btn_change_pwd_Click(object sender, EventArgs e)
        {
            string pwd = tb_pwd.Text;
            string userName = tb_username.Text;
            if (string.IsNullOrEmpty(pwd) || string.IsNullOrEmpty(userName))
            {
                MessageBox.Show("用户名密码不能空");
                return;
            }

            ChangePassword(userName.Trim(), pwd.Trim());
        }
    }
}