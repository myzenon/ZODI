<template>
    <div class = "wrapper">
         <div class="mapping-table">
            <table class="mapping">
                <tr>
                    <th class="mapping-table">Star</th>
                    <th class="mapping-table">Aquarius</th>
                </tr>
                <tr>
                    <td class="mapping-table">Sun</td>
                    <td class="mapping-table">Aquarius</td>
                </tr>
                <tr>
                    <td class="mapping-table">Moon</td>
                    <td class="mapping-table">Leo</td>
                </tr>
                <tr>
                    <td class="mapping-table">Mar</td>
                    <td class="mapping-table">Leo</td>
                </tr>
                <tr>
                    <td class="mapping-table">Mercury</td>
                    <td class="mapping-table">Libra</td>
                </tr>
                <tr>
                    <td class="mapping-table">Jupiter</td>
                    <td class="mapping-table">Libra</td>
                </tr>
                <tr>
                    <td class="mapping-table">Venus</td>
                    <td class="mapping-table">none</td>
                </tr>
                <tr>
                    <td class="mapping-table">Saturn</td>
                    <td class="mapping-table">Gemini</td>
                </tr>
                <tr>
                    <td class="mapping-table">Eclipse</td>
                    <td class="mapping-table">Aquarius</td>
                </tr>
                <tr>
                    <td class="mapping-table">Neptune</td>
                    <td class="mapping-table">Aquarius</td>
                </tr>
                <tr>
                    <td class="mapping-table">Uranus</td>
                    <td class="mapping-table">Sagittarius</td>
                </tr>
                <tr>
                    <td class="mapping-table">Lakkana</td>
                    <td class="mapping-table">none</td>
                </tr>

            </table>
         <router-link to="/"> 
         <div class="transform">
         <p class="transform">Back to Home</p> 
         </div>
         </router-link>
    </div>
</div>


</template>

<script>
export default {
};
</script>

<style scoped>
table.mapping {
    border: 1px solid #891abc;
    background-color: #aaa;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
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
    padding: 40px 0px;
    background-color:red;
    background-image: url('../assets/sec2.png');
    background-size: cover;
    background-position: left;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.6);
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
p.transform{
    color : #bbb;
}
</style>
