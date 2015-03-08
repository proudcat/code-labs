using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using basic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace basic.Tests {
    [TestClass()]
    public class DemoTests {
        [TestMethod()]
        public void InvokeTest() {
            Demo d = new Demo();
            Assert.AreEqual(0, d.Invoke());
            Assert.AreEqual(1, d.Invoke(123));
            Assert.AreEqual(3, d.Invoke(12,35,22));

        }

        [TestMethod()]
        public void JustTest() {
            Assert.AreEqual(0, Math.Sign(0));
            Assert.AreEqual(1, Math.Sign(0.5));
            Assert.AreEqual(1, Math.Sign(8));
            Assert.AreEqual(-1, Math.Sign(-0.0008));
            Assert.AreEqual(0, Math.Sign(-0));
            Assert.AreEqual(-1, Math.Sign(-100));
        }

    }
}
