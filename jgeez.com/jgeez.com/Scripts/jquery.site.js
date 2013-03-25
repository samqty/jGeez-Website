$(document).ready(function () {
    //popups
    $(".menuitem").click(function () {
        _link = $(this).find("a");
        if (_link.attr("href")) {
            document.location = _link.attr("href");
        }
    });

    $("#reportbug").click(function () {
        $("#reportbugdialog").dialog(
        {
            "width": 330,
            buttons: {
                "Submit": function () {
                    //Add code to save bug
                    $(this).dialog("close");
                }
            }
        }
        );
    });

    $(".menuitem").hover(function () {
        $(this).append("<div class='menuitem_hover'>&nbsp;</div>");
        var _hover = $(this).find(".menuitem_hover");
        _hover.css({ "height": $(this).outerHeight() });
        $(this).find(".menuitem_hover").animate({ "width": $(this).outerWidth() }, "fast");
    }, function () {
        $(this).find(".menuitem_hover").animate({ "width": "0px" }, "fast", function () {
            $(this).remove();
        });
    });
});