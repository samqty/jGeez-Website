using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jGeez.com.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Overview()
        {
            return View("Overview");
        }

        public ActionResult Downloads()
        {
            return View("Downloads");
        }

        public ActionResult DevelopersGuide()
        {
            return View("DevelopersGuide");
        }

        public ActionResult Samples()
        {
            return View("Samples");
        }

        public ActionResult Help()
        {
            return View();
        }

        public ActionResult TermsAndConditions()
        {
            return View();
        }

        public ActionResult ContactMe()
        {
            return View();
        }
    }
}
