import $ from "jquery";
function hello(user) {
  console.log("Hello " + user);
  $(document).on("ready", function () {
    console.log("jquery is ready");
  });
  return "Hello " + user;
}

hello("John");
