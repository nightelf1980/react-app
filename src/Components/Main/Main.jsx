import React from "react";

const Main = () => {
    return (
        <main>
            <div class="container-fluid py-3">
                {/* CAROUSEL */}
                <div class="container">
                    <div class="row">
                        <div class="text">
                            <h2>Cactus y Suculentas</h2>
                            <p>Se dice de los cactus que son plantas todoterreno que, prácticamente no necesitan cuidados. Apenas hay que regarlas y su crecimiento es lento y pausado, por lo que no requieren de trasplantes ni otras atenciones.</p>
                            <p>Esa creencia de que los cactus son plantas que no necesitan nada de nosotros no es del todo cierta. La realidad es que requieren atenciones distintas al resto.</p>
                            <p>Es importante vigilar aspectos como la adaptación a sus periodos de crecimiento y reposo, que son diferentes en cada especie. Cuando los cactus y suculentas están en periodo de reposo no necesitan apenas agua ni alimento. De hecho una de las razones por las que se marchitan es por regarlas y abonarlas cuando no se debe.</p>
                            <p>Por otro lado, la cantidad de luz que reciben o el tipo de sustrato no son factores demasiado relevantes para su cultivo. La clave para tener nuestras plantas suculentas realmente sanas y bellas está en conocerlas y aprender cuáles son sus necesidades reales.</p>
                            <h2>Obras de arte vegetales</h2>
                            <p>Abrir la puerta de tu casa a cactus y otras plantas suculentas es una estupenda manera de decorar los espacios. Además de aportar belleza, nos ayudan a crear espacios verdes sumamente sostenibles en nuestros hogares. Y gracias a su mínimo mantenimiento, nos permiten disfrutar del mundo vegetal sin esclavizarnos con sus cuidados.</p>
                            <p>Por otro lado, la variedad es tan amplia que no es difícil encontrar el ejemplar perfecto para cada espacio: pequeños para poner un toque verde en espacios reducidos o grandes y espectaculares para decorar un salón amplio.</p>
                            <p>Apuesta por las formas originales de los cactus, que en ocasiones son una oda a la geometría, por sus espinas llenas de belleza y por los sutiles colores. Sanseviera, Pachycereus, Beucarnea, Pachypodium o Zamioculca son algunas de estas suculentas espectaculares.</p>    
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="tarjetas d-flex justify-content-center">
                        <div class="row col-md-10">
                            <div class="col-md-6 py-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="../../img/principalCard/cactusCard.jpg" class="card-img-top" alt="Cactus" />
                                        <h5 class="card-title text-center py-1">Cactus</h5>
                                        <p class="card-title text-center">Las cactáceas, son conocidas en conjunto como cactos, cactus o cacti</p>
                                    </div>
                                    <div class="card-footer text-center">
                                        <a href="/" class="btn boton-ver btn-secondary">Más información</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 py-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="../../img/principalCard/suculentasCard.jpg" class="card-img-top" alt="Suculentas" />
                                        <h5 class="card-title text-center py-1">Suculentas</h5>
                                        <p class="card-title text-center">La palabra 'Suculenta' viene del latín succulentus, que significa: 'jugoso'</p>
                                    </div>
                                    <div class="card-footer text-center">
                                        <a href="/" class="btn boton-ver btn-secondary">Más información</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="text">
                            <h2 class="text-center">Productos a la venta</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex justify-content-center">
                            <div class="row col-md-10">
                                <div class="col-md-6 py-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <img src="../../img/principalCard/interioryexteriorCard.jpg" class="card-img-top" alt="Productos a la venta" />
                                            <h5 class="card-title text-center py-1">Productos a la venta</h5>
                                            <p class="card-title text-center">Hermosas plantas tanto de interior como de exterior.</p>
                                        </div>
                                        <div class="card-footer text-center">
                                        <a href="/" class="btn boton-ver btn-success">Ir a comprar</a></div>
                                    </div>
                                </div>
                            <div class="col-md-6 py-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img src="../../img/principalCard/sustratosCard.jpg" class="card-img-top" alt="Sustratos" />
                                            <h5 class="card-title text-center py-1">Sustratos</h5>
                                            <p class="card-title text-center">Tierra de hoja y sustratos para suculentas y plantas de interior</p></div>
                                        <div class="card-footer text-center">
                                            <a href="/" class="btn boton-ver btn-success">Ir a comprar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
