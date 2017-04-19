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
    <div class="transform">
        <button type="button" class="transform">Transform</button>
    </div>
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
body {
    background-color: #333;
}

p.symbol {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size : 150%;
    color: #bbb;
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
    background-image: url('../assets/sec1.jpg');
    background-size: cover;
    background-position: left;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.6);
    padding-top: 20px;
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

table.mapping {
    border: 1px solid #891abc;
    background-color: #fff;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}

td.mapping-table {
    text-align: center;
    border: 1px solid #891abc;
    padding: 10px 0px;
    color: #891abc;
}

th.mapping-table {
    text-align: center;
    border: 1px solid #891abc;
    color: #891abc;
}

div.mapping-table {
    text-align: center;
    padding: 20px 0px;
}
h1.header_text{
    text-align: center;
    font-size : 150%;
    color: #a49cba;
}
div.select_area{
     background-color: #111;
}
</style>
