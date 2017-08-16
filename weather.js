$(document).ready(function () {
    var city = "Wright, ACT, AU";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
    //var icons = ["sun", "moon", "windy", "wind", "snowflake"];
    //var weather = ["tornado", "tropical storm", "hurricane", "severe thunderstorms", "thunderstorms", "mixed rain and snow", "mixed rain and sleet", "mixed snow and sleet", "freezing drizzle", "drizzle", "freezing rain", "showers", "showers", "snow flurries", "light snow showers", "blowing snow", "snow", "hail", "sleet", "dust", "foggy", "haze", "smoky", "blustery", "windy", "cold", "cloudy", "mostly cloudy (night)", "mostly cloudy (day)", "partly cloudy (night)", "partly cloudy (day)", "clear (night)", "sunny", "fair (night)", "fair (day)", "mixed rain and hail", "hot", "isolated thunderstorms", "scattered thunderstorms", "scattered thunderstorms", "scattered showers", "heavy snow", "scattered snow showers", "heavy snow", "partly cloudy", "thundershowers", "snow showers", "isolated thundershowers"];

    //change city variable dynamically as required
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (data) {
        console.log(data);
        $('#city').html(city);
        $('#temp').html("Currently " + data.query.results.channel.item.condition.temp);
        $('#text').html(data.query.results.channel.item.condition.text);
        var text = data.query.results.channel.item.condition.text;
        if (text == 'Tornado') {
            $('#weather').html('<span class="mif-lightning3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Tropical Storm') {
            $('#weather').html('<span class="mif-lightning3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Hurricane') {
            $('#weather').html('<span class="mif-lightning3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Severe Thunderstorms') {
            $('#weather').html('<span class="mif-lightning3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Thunderstorms') {
            $('#weather').html('<span class="mif-lightning2 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Mixed Rain and Snow') {
            $('#weather').html('<span class="mif-snowy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Mixed Rain and Sleet') {
            $('#weather').html('<span class="mif-weather4 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Freezing Drizzle') {
            $('#weather').html('<span class="mif-snowy2 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Drizzle') {
            $('#weather').html('<span class="mif-rainy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Freezing Rain') {
            $('#weather').html('<span class="mif-snowy2 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Showers') {
            $('#weather').html('<span class="mif-rainy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Snow Flurries') {
            $('#weather').html('<span class="mif-snowy3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Light Snow Showers') {
            $('#weather').html('<span class="mif-snowy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Blowing Snow') {
            $('#weather').html('<span class="mif-snowy3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Snow') {
            $('#weather').html('<span class="mif-snowy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Hail') {
            $('#weather').html('<span class="mif-weather4 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Sleet') {
            $('#weather').html('<span class="mif-weather4 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Dust') {
            $('#weather').html('<span class="mif-lines mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Foggy') {
            $('#weather').html('<span class="mif-weather3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Haze') {
            $('#weather').html('<span class="mif-lines mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Smoky') {
            $('#weather').html('<span class="mif-lines mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Blustery') {
            $('#weather').html('<span class="mif-wind mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Windy') {
            $('#weather').html('<span class="mif-wind mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Breezy') {
            $('#weather').html('<span class="mif-wind mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Cold') {
            $('#weather').html('<span class="mif-snowflake mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Cloudy') {
            $('#weather').html('<span class="mif-cloudy2 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Mostly Cloudy (Night)') {
            $('#weather').html('<span class="mif-cloud2 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Mostly Cloudy (Day)') {
            $('#weather').html('<span class="mif-cloudy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Partly Cloud (Night)') {
            $('#weather').html('<span class="mif-cloud2 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Partly Cloudy (Day)') {
            $('#weather').html('<span class="mif-cloudy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Clear (Night)') {
            $('#weather').html('<span class="mif-moon mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Sunny') {
            $('#weather').html('<span class="mif-sun mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Fair (Night)') {
            $('#weather').html('<span class="mif-moon mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Fair (Day)') {
            $('#weather').html('<span class="mif-sun mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Mixed Rain and Hail') {
            $('#weather').html('<span class="mif-weather4 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Hot') {
            $('#weather').html('<span class="mif-sun mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Isolated Thunderstorms') {
            $('#weather').html('<span class="mif-cloud4 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Scattered Thunderstorms') {
            $('#weather').html('<span class="mif-cloud4 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Scattered Showers') {
            $('#weather').html('<span class="mif-rainy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Heavy Snow') {
            $('#weather').html('<span class="mif-snowy3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Partly Cloudy') {
            $('#weather').html('<span class="mif-cloud3 mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Thundershowers') {
            $('#weather').html('<span class="mif-rainy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Snow Showers') {
            $('#weather').html('<span class="mif-snowy mif-2x" style="margin-left:10px;"></span>')
        }
        else if (text == 'Isolated Thundershowers') {
            $('#weather').html('<span class="mif-rainy mif-2x" style="margin-left:10px;"></span>')
        }
        else
            $('#weather').html('<span class="mif-none mif-2x" style="margin-left:10px;"></span>')
    });
});  