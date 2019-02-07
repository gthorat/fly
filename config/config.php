<?php
    // session start
    @session_start();

    // Set default timezone to india
    date_default_timezone_set("Asia/Calcutta");

    // Path settings
    define("PROTOCOL", mb_strtolower(explode("/", $_SERVER["SERVER_PROTOCOL"])[0]));
    define("HOSTNAME", $_SERVER["HTTP_HOST"]);
    define("DOCUMENT_ROOT", $_SERVER["DOCUMENT_ROOT"]);
    define("REQUEST_URI", "/fly/");

    // Title
    define("TITLE", "Fly - Chat Room");

    // This is root http path
    define("ROOT_HTTP", PROTOCOL."://".HOSTNAME.REQUEST_URI);
    define("ROOT", DOCUMENT_ROOT.REQUEST_URI);

    // This is CSS and JS Path
    define("CSS_PATH", ROOT_HTTP."css/");
    define("JS_PATH", ROOT_HTTP."js/");

    // This is html view path
    define("VIEW_PATH", ROOT."views/");

    // This is images folder path
    define("IMAGES_HTTP", ROOT_HTTP."images/");

    // Common Header, Footer or other common navigations path
    define("COMMON_PATH", ROOT."common/");

    // Controller Path
    define("CONTROLLER_PATH", ROOT_HTTP."controller/");

    // Upload Path
    define("UPLOAD_PATH_HTTP", ROOT_HTTP."uploads/");
    define("UPLOAD_PATH", ROOT."uploads/");

?>
