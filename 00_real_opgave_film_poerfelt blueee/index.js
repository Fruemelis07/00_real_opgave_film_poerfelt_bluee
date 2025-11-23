var currentPage = '#page1'

//P5 setup() bliver kaldt EN gang før siden vises 
function setup(){
    console.log('P5 setup kaldt inshallah')
    
    //skift til current page 
    shiftPage(currentPage)

    //Drop Downs 
    document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('theDropdown');
    const img = document.getElementById('dropdownImage');
    if (!select || !img) return;

   select.addEventListener('change', () => {
     const val = select.value;
      if (!val) {
        img.style.display = 'none';
        img.src = '';
        return;
       }
      img.src = val;
      img.style.display = 'block';
       });
    });
    



    //Sæt menu op
    //Hent alle sider som et array
    var allPages = selectAll('.page')
    //Løb listen igennem en for en 
    allPages.map(
       page => {
        //Lav et nyt <a> element 
        var menuItem = createElement('a')
        //Sæt a taggets html til sidens titel
        menuItem.html(page.attribute('title'))
        //sæt eventlistener på a tagget
        menuItem.mousePressed(
            () => shiftPage('#' + page.attribute('id'))
        )
        //sæt a tagget ind i sidebaren
        select('.sidebar').child(menuItem)
       }
    )

}

function shiftPage(newPage){
    select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}
