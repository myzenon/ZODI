<template>
    <div class = "wrapper">
    <table class="table is-striped  is-bordered" >
                <thead>
                    <tr><!--TableHead-->
                        <th>
                            Star
                        </th>
                        <th>
                            <div class="rightside">Zodiac</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div><img  src="../assets/A1.png"> = Sun</div>
                        </td>
                        
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A2.png"> = Moon</div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A3.png"> = Mar</div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A4.png"> = Mercury</div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A5.png"> = Jupiter</div>
                        </td>
                        <td>
                        Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A6.png"> = Venus</div>
                        </td>
                        <td>
                        Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A7.png"> = Saturn</div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A8.png"> = Eclipse</div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A9.png"> = Neptune</div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/A10.png"> = Uranus</div>
                        </td>
                        <td>
                                Aries
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><img  src="../assets/ARlux.png"> = Lakkana </div>
                        </td>
                        <td>
                            Pisces
                        </td>
                    </tr>
                    
                    

                </tbody>
            </table>


    <router-link to="/">
    <div class="BacktoHome">
       <p>BACK HOME</p>
    </div>
    </router-link>
</div>


</template>

<script>
export default {
};
</script>

<style scoped>

    .wrapper {
        background-color : #333;
        margin-bottom :17vmin;
        
    }
    
   th {
        text-align: center;
        vertical-align: middle;
        background-color :#444444;
        border-color : #555;
        color : #EEE!important;
       
   }
   td {
       vertical-align: middle;
       color : #555;
       
   }
   .ZodiacChoice {
       color : #888;
       
   }
   .button {
       background-color : #3c0d76;
   }
   .TransformButton {
        position: fixed;
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
   .ZodiacSeletor {
    text-align : center;
   }
   
   div.BacktoHome {
        position: fixed;
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

</style>
