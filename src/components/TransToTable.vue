<template>
<div class="wrapper">
<section class="header">
    <div class="header_image">
        <lakkana></lakkana>
    </div>
</section>
    <div class = "select_area">
        <p class="symbol"> ๑ :
            <span class="select ">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๒ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๓ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๔ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๕ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๖ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๗ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๘ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๙ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> ๐ :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
        <p class="symbol"> <img src="../assets/ARlux.png" class="ARlux"> :
            <span class="select">
            <select>
                <option>none</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>        
            </select>
        </span>
        </p>
    </div>
    <router-link to="/TransToTable-Result">
    <div class="transform">
       <p class="transform">Transform</p>
    </div>
    </router-link>
</div>

</template>

<script>
 import Lakkana from './LakkanaChart';

export default {
     components: {
         lakkana: Lakkana,
     },
};

</script>

<style scoped>

p.symbol {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    color: #eee;   
    font-size : 130%; 
}

p.transform{
    color : #fff;
    font-size : 125%;
}
.ARlux{
    width : 5%
}
span.select{
    font-size : 100%
}
div.transform {
    position: absolute;
    color: white;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #3c0d76;
    padding: 4.5vmin 0;
    font-size: 5.2vw;
    font-weight: bold;
}
div.header_image {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
}
section.header{
    background-image: url('../assets/sec1.jpg');
    background-size: cover;
    background-position: right;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.6);
    padding-top: 20px;
}
span.select {
    border: 1px solid #891abc;
}
h1.header_text{
    text-align: center;
    font-size : 150%;
    color: #a49cba;
}
div.select_area{
    padding-top: 30px;
    padding-bottom: 80px;
}
</style>
