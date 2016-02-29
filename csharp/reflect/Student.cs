using System;

namespace reflect
{
    [System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = false)]
    public class MessageAttribute : System.Attribute
    {
        public string Route { get; set; }

        public MessageAttribute(string route)
        {
            Route = route;
        }
    }


    public class People
    {

        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age;

        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }


        public void LaShi()
        {
            Console.WriteLine("拉屎");
        }
    }

    [MessageAttribute("hall.hallhandler.reqXXX")]
    public class Student : People
    {
        private int _number;

        public int Number
        {
            get { return _number; }
            set { _number = value; }
        }

    }

    public class AVGirl : People
    {
        private int _size;

        public int Size
        {
            get { return _size; }
            set { _size = value; }
        }
    }


    public class Room
    {
        private int _size;

        public int Size
        {
            get { return _size; }
            set { _size = value; }
        }

    }


}
