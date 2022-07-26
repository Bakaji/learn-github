import l from "jquery";
function n(o) {
  return console.log("Hello " + o), l(document).on("ready", function() {
    console.log("jquery is ready");
  }), "Hello " + o;
}
n("John");
