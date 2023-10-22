const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '4 Habitaciones',
    baños: '4 Baños',
    costo: 5000,
    smoke: true,
    pets: false
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: '2 Habitaciones',
    baños: '1 Baños',
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'loft industrial',
        src: 'https://hips.hearstapps.com/hmg-prod/images/tribeca-loft-en-ny-03-1535103794.jpg?resize=1200:*',
        descripcion: 'Espacioso loft con diseño industrial.',
        ubicacion: 'Barrio Industrial',
        habitaciones: '1 habitaciones',
        baños: '1 baños',
        costo: 7000,
        smoke: true,
        pets: false
    },
    {
      nombre: 'cabaña montañesa',
        src: 'https://images.adsttc.com/media/images/550b/82ab/e58e/ceb2/7000/0164/slideshow/portada_ATI_9911.jpg?1426817680',
        descripcion: 'Cabaña tranquila en la montaña.',
        ubicacion: 'Montañas Rocosa',
        habitaciones: '3 habitaciones',
        baños: '2 baños',
        costo: 100000,
        smoke: true,
        pets: true
    }
    ]

    /* Funcion para cargar en ventas */
    
    function prop_venta () {
    const tarjet = document.querySelector("#cardt"); 
    let template = "";

    let indice = 0;

    for (let propiedad of propiedades_venta) {
      template += `
      <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
      `
              if (propiedad.smoke == true && propiedad.pets == true) {
                template += ` <p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
              </div>`
              }else if (propiedad.smoke == false && propiedad.pets == false) {
                template += `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
              </div>
                `
              }else if (propiedad.smoke == false && propiedad.pets == true) {
                template += ` <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
              </div>`
              }else if (propiedad.smoke == true && propiedad.pets == false) {
                template += `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
              </div>`
              }
                         
            
              }
       tarjet.innerHTML = template;
    }

   

    const propiedades_alquiler = [
        {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 Baños',
        costo: 2000,
        smoke: false,
        pets: true
        },
        {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones',
        baños: '3 Baños',
        costo: 2500, 
        smoke: true,
        pets: true
        },
        {
            nombre: 'Condominio moderno en zona residencial',
            src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: '2 Habitaciones',
            baños: '2 Baños',
            costo: 2200,
            smoke: false,
            pets: false        
        },
        {
            nombre: 'departamento urbano',
            src: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/414135618.jpg?k=7f2e34603af31bccb8ab415600fcce9150cf056aa4aa5096b21d728cb97f8027&o=',
            descripcion: 'Moderno departamento en el corazón de la ciudad.',
            ubicacion: 'Centro Urbano',
            habitaciones: '2 habitaciones',
            baños: '1 baños',
            costo: 80,
            smoke: false,
            pets: false
        }
        ]

        /* Funcion para cargar en ventas */

        function prop_alquiler () {
            const tarjet2 = document.querySelector("#carda"); 
            let template2 = "";
        
            let indice = 0;
        
            for (let propiedadAlqui of propiedades_alquiler) {
              template2 += `
              <div class="card">
                      <img
                        src="${propiedadAlqui.src}"
                        class="card-img-top"
                        alt=""
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          ${propiedadAlqui.nombre}
                        </h5>
                        <p class="card-text">
                          ${propiedadAlqui.descripcion}
                        </p>
                        <p>
                          <i class="fas fa-map-marker-alt"></i> ${propiedadAlqui.ubicacion}
                        </p>
                        <p>
                          <i class="fas fa-bed"></i> ${propiedadAlqui.habitaciones} |
                          <i class="fas fa-bath"></i> ${propiedadAlqui.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedadAlqui.costo}</p>
              `
                      if (propiedadAlqui.smoke == true && propiedadAlqui.pets == true) {
                        template2 += ` <p class="text-success">
                          <i class="fas fa-smoking"></i> Permitido fumar
                        </p>
                        <p class="text-success">
                          <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>
                      </div>
                      </div>`
                      }else if (propiedadAlqui.smoke == false && propiedadAlqui.pets == false) {
                        template2 += `<p class="text-danger">
                          <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>
                        <p class="text-danger">
                          <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>
                      </div>
                      </div>
                        `
                      }else if (propiedadAlqui.smoke == false && propiedadAlqui.pets == true) {
                        template2 += ` <p class="text-danger">
                          <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>
                        <p class="text-success">
                          <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>
                      </div>
                      </div>`
                      }else if (propiedadAlqui.smoke == true && propiedadAlqui.pets == false) {
                        template2 += `<p class="text-success">
                          <i class="fas fa-smoking"></i> Permitido fumar
                        </p>
                        <p class="text-danger">
                          <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>
                      </div>
                      </div>`
                      }
                                 
                    
                      }
               tarjet2.innerHTML = template2;
            }

            /* Funcion para cargar en index */

            

            function index_venta () {
                
                
                
                
                const indexv = document.querySelector("#index-vent");
                let templatev = "";
                let indice = 0;
               
                
                        for (let propiedad of propiedades_venta) {
                       
                        templatev += `
                                    <div class="card">
                                <img
                                    src="${propiedad.src}"
                                    class="card-img-top"
                                    alt=""
                                />
                                <div class="card-body">
                                    <h5 class="card-title">
                                    ${propiedad.nombre}
                                    </h5>
                                    <p class="card-text">
                                    ${propiedad.descripcion}
                                    </p>
                                    <p>
                                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                                    </p>
                                    <p>
                                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                                    <i class="fas fa-bath"></i> ${propiedad.baños}
                                    </p>
                                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>`
                          if (propiedad.smoke == true && propiedad.pets == true) {
                                    templatev += ` <p class="text-success">
                                    <i class="fas fa-smoking"></i> Permitido fumar
                                    </p>
                                    <p class="text-success">
                                    <i class="fas fa-paw"></i> Mascotas permitidas
                                    </p>
                                </div>
                                </div>`
                          }else if (propiedad.smoke == false && propiedad.pets == false) {
                                    templatev += `<p class="text-danger">
                                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                                    </p>
                                    <p class="text-danger">
                                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                                    </p>
                                </div>
                                </div>
                                    `
                          }else if (propiedad.smoke == false && propiedad.pets == true) {
                                    templatev += ` <p class="text-danger">
                                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                                    </p>
                                    <p class="text-success">
                                    <i class="fas fa-paw"></i> Mascotas permitidas
                                    </p>
                                </div>
                                </div>`
                          }else if (propiedad.smoke == true && propiedad.pets == false) {
                                templatev += `<p class="text-success">
                                <i class="fas fa-smoking"></i> Permitido fumar
                                </p>
                                <p class="text-danger">
                                <i class="fa-solid fa-ban"></i> No se permiten mascotas
                                </p>
                            </div>
                            </div>`
                            }
                                     
                          
                          
                          }
                        
                        indexv.innerHTML = templatev;

                        
                        const indexa = document.querySelector("#index-alqui")
                        let templatea = "";
        
                        for (let propiedadAlqui of propiedades_alquiler) {
                            templatea += `
                            <div class="card">
                                    <img
                                      src="${propiedadAlqui.src}"
                                      class="card-img-top"
                                      alt=""
                                    />
                                    <div class="card-body">
                                      <h5 class="card-title">
                                        ${propiedadAlqui.nombre}
                                      </h5>
                                      <p class="card-text">
                                        ${propiedadAlqui.descripcion}
                                      </p>
                                      <p>
                                        <i class="fas fa-map-marker-alt"></i> ${propiedadAlqui.ubicacion}
                                      </p>
                                      <p>
                                        <i class="fas fa-bed"></i> ${propiedadAlqui.habitaciones} |
                                        <i class="fas fa-bath"></i> ${propiedadAlqui.baños}
                                      </p>
                                      <p><i class="fas fa-dollar-sign"></i> ${propiedadAlqui.costo}</p>
                            `
                                    if (propiedadAlqui.smoke == true && propiedadAlqui.pets == true) {
                                        templatea += ` <p class="text-success">
                                        <i class="fas fa-smoking"></i> Permitido fumar
                                      </p>
                                      <p class="text-success">
                                        <i class="fas fa-paw"></i> Mascotas permitidas
                                      </p>
                                    </div>
                                    </div>`
                                    }else if (propiedadAlqui.smoke == false && propiedadAlqui.pets == false) {
                                        templatea += `<p class="text-danger">
                                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                                      </p>
                                      <p class="text-danger">
                                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                                      </p>
                                    </div>
                                    </div>
                                      `
                                    }else if (propiedadAlqui.smoke == false && propiedadAlqui.pets == true) {
                                        templatea += ` <p class="text-danger">
                                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                                      </p>
                                      <p class="text-success">
                                        <i class="fas fa-paw"></i> Mascotas permitidas
                                      </p>
                                    </div>
                                    </div>`
                                    }else if (propiedadAlqui.smoke == true && propiedadAlqui.pets == false) {
                                        templatea += `<p class="text-success">
                                        <i class="fas fa-smoking"></i> Permitido fumar
                                      </p>
                                      <p class="text-danger">
                                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                                      </p>
                                    </div>
                                    </div>`
                                    }
                                               
                                  
                                    }
                             indexa.innerHTML = templatea;

            }