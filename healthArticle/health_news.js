var xhr = new XMLHttpRequest();

var url = './health.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function(){

    var healthNews = xhr.response.news;
    
    var newsDiv = document.getElementById('health-news');

    healthNews.forEach(function(news) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('news');
  
        var title = document.createElement('h2');
        title.textContent = news.title;
  
        var description = document.createElement('p');
        description.textContent = news.description;

        var subText = document.createElement('p');
        subText.textContent = news.subText;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Health News:';

       newDiv.appendChild(title);
       newDiv.appendChild(description);
       newDiv.appendChild(subText);
       newDiv.appendChild(waysHeader);

       newsDiv.appendChild(newDiv);
});
    
}
xhr.send();