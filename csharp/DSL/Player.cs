using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSL {
    class Player// : System.IComparable 
    {
        public ulong Id { get; set; }
        public string Name { get; set; }
        public uint Level { get; set; }
        public uint Score { get; set; }
        public string Province { get; set; }


        public override string ToString() {
            return string.Format("[ ID:{0},Name:{1},Level:{2},Score:{3},Province:{4} ]", Id, Name, Level, Score, Province);
        }

        //#region IComparable 成员
        //public int CompareTo(object obj) {
        //    if (obj is Player) {
        //        Player p = obj as Player;
        //        return Level.CompareTo(p.Level);
        //    }
        //    throw new NotImplementedException("obj is not a Player!");
        //}
        //#endregion

    }


    class PlayerCompare : IComparer<Player> {
        public int Compare(Player a, Player b) {
            return a.Level.CompareTo(b.Level);
        }
    }

}
