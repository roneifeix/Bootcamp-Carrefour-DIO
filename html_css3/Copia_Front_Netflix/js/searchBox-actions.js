function showSearchBox(param) {
    var showBox = param;
    var searchIconVisibility;
    var searchBoxVisibility;

    if (showBox == true) {
        searchIconVisibility = 'none';
        searchBoxVisibility = 'inline-flex';
    } else {
        searchIconVisibility = 'inline';
        searchBoxVisibility = 'none';
    }

    document.getElementById('search-icon').style.display = searchIconVisibility;
    document.getElementById('search-box').style.display = searchBoxVisibility;
}