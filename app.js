

class manejadorDeProductos{
        constructor(){
          listaProducto=[]
        }
        agregar(){
            this.listaProducto.push(producto)
        }


        
        mostrarProductos(){
                const producto0=document.getElementById("tarjetasproductos")

                const producto1 = new manejadorDeProductos ({img:"/imagenes/maquinfk.jpg",titulo:"mMaquina de tatuar",precio:15000,descripcion:"Es una maquina rotativa"},
                                {img:"/imagenes/maquinfk.jpg",titulo:"mMaquina de tatuar",precio:15000,descripcion:"Es una maquina rotativa"},
                                {img:"/imagenes/maquinfk.jpg",titulo:"mMaquina de tatuar",precio:15000,descripcion:"Es una maquina rotativa"},
                                {img:"/imagenes/maquinfk.jpg",titulo:"mMaquina de tatuar",precio:15000,descripcion:"Es una maquina rotativa"},)
                                

                    producto1.forEach(producto1 =>{
                        producto0.innerHTML += `<div class="container">
                            <div>
                            <img src="${producto1.img}" alt="">
                            <h2>${producto1.titulo}</h2>
                            <h3>${producto1.precio}</h3>
                            <p>${producto1.descripcion}</p>
                            <a href="" class="BotonpParaAgregar">Agregar al carrito</a>
                            </div>     
                            </div>
                            `
                 });
                        const BotonParaAgregar=document.getElementById("BotonpParaAgregar")
                        BotonParaAgregar.addEventListener("click",()=>{
                            Swal.fire({
                                title: 'Sweet!',
                        text: 'Modal with a custom image.',
                        imageUrl: 'https://unsplash.it/400/200',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                    })

                })
     }

}



        





