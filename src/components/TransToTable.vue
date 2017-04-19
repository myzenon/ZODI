<template>
<div class="wrapper">
<section class="header">
    <div>
        <h1 class="header_text"> Transform Lakkana Chart to Mapping-Table </h1>
    </div>
    <div class="header_image">
        <lakkana></lakkana>
    </div>
</section>
    <div class = "select_area">
        <p class="symbol"> ๑ :
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
        </p>
        <p class="symbol"> 0 :
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
        </p>
        <p class="symbol"> ล :
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
    <router-link to="/TableFromLukkana">
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
    font-size : 150%;
    color: #eee;
}

p.transform{
    color : #bbb;
}

button.transform {
    padding: 10px 0px 10px 0px;
    border: 3px solid #891abc;
    width: 35%;
    color: #891abc;
    background-color: #fff;
    font-size: 150%;
}

div.transform {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    position: fixed;
    bottom : 0;
    left : 0;
    right : 0;
    background-color: #2b106d;
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
    padding-bottom: 80px;
}
</style>
