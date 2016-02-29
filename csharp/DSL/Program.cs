using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace DSL {

    class Program {

        static void Main(string[] args) {

            List<Player> players = new List<Player>(){
                new Player(){Id = 1, Name = "jack", Level = 25,Score = 100,Province="liaoning" },
                new Player(){Id = 2, Name = "fanfan", Level = 215,Score = 154650,Province="anhui" },
                new Player(){Id = 3, Name = "steven", Level = 45,Score = 78200,Province="beijing" },
                new Player(){Id = 4, Name = "bill", Level = 56,Score = 65640,Province="liaoning" },
                new Player(){Id = 5, Name = "jay", Level = 68,Score = 5231236,Province="hubei" },
                new Player(){Id = 6, Name = "turbo", Level = 12,Score = 10700,Province="liaoning" },
                new Player(){Id = 7, Name = "sanpang", Level = 10,Score = 49100,Province="shanghai" },
                new Player(){Id = 8, Name = "baobao", Level = 5,Score = 1500,Province="liaoning" },
                new Player(){Id = 9, Name = "nell", Level = 150,Score = 64100,Province="shandong" },
            };

            //players.Sort();

            //players.Sort(new PlayerCompare());
            //players.Sort(0, 3, new PlayerCompare());

            //players.Sort(
            //    delegate(Player a, Player b) { return a.Level.CompareTo(b.Level); }
            //    );
            //players.Sort((Player a, Player b) => { return a.Level.CompareTo(b.Level); });
            //players.ForEach(p => Debug.Print(p.ToString()));

            List<Player> temp = new List<Player>();
            foreach (var item in players) {
                if (item.Level > 30) {
                    temp.Add(item);
                }
            }


            var m =
                from p in players
                where p.Level > 0 && p.Level < 102   //you can replace it by a bool returned fucntion
                orderby p.Level descending
                select p;   //new {p.Name,p.Level}


            //IEnumerable<Student> m =
            //    from n in students
            //    where n.Age > 30
            //    select n;

            //var m =
            //    from p in players
            //    where p.Score > 100
            //    group p by p.Province ;

            //var m =
            //    from p in players
            //    group p by p.Province into g
            //    where g.Count() > 3
            //    select g;

            //foreach (IGrouping<string, Player> playerGroup in m) {
            //    Debug.Print(playerGroup.Key);
            //    // Explicit type for student could also be used here.
            //    foreach (var player in playerGroup) {
            //        Debug.Print(" {0}, {1}", player.Name, player.Score);
            //    }
            //}

            Debug.Print(m.Count().ToString());
            m.ToList().ForEach(stu => Debug.Print(stu.ToString()));

        }
    }
}
