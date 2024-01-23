import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import { Divider, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import elefante from '../../assets/img/elefante.msh.png'
import espiral_run from '../../assets/img/espiral_run.png'
import example_clock from '../../assets/img/example_clock.png'
import lios_msh from '../../assets/img/lios_msh.png'
import logo_cgal from '../../assets/img/logo_cgal.png'
import rotor_msh from '../../assets/img/rotor_msh.png'
import skull_msh from '../../assets/img/skull_msh.png'
import CMakeList from '../../assets/resources/CMakeLists.txt'
import heartCPP from '../../assets/resources/heart.cpp.txt'
import skullCPP from '../../assets/resources/skull.cpp.txt'
import Sidebar from '../home/components/Sidebar'
import CardC from './components/Card'

const itemData = [
  {
    img: example_clock,
    title: ''
  },
  {
    img: espiral_run,
    title: ''
  }
]

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'Ecuaciones diferenciales parciales', url: '#' },
    { title: 'Método de Galerien', url: '#' },
    { title: 'Ecuación de calor', url: '#' },
    { title: 'Ecuaciones de electromagnetismo', url: '#' },
    { title: 'Ecuaciones de elasticidad', url: '#' },
    { title: 'Triangulaciones de Delaunay', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
}

export default function CGAL({ title }: { title: string }) {
  return (
    <Grid container spacing={5} sx={{ mt: 3 }}>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          '& .markdown': {
            py: 3
          }
        }}
      >
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Divider />
        <img src={logo_cgal} alt='' />
        <p>
          CGAL (Computational Geometry Algorithms Library) es una biblioteca C++
          de código abierto que proporciona algoritmos eficientes y confiables
          para una amplia variedad de problemas de geometría computacional.
          Desde operaciones básicas hasta algoritmos más complejos, CGAL ofrece
          una gran cantidad de funciones listas para usar que simplificarán las
          tareas de geometría computacional en el contexto de la física. Con
          CGAL, los usuarios podrán realizar cálculos precisos, realizar
          consultas geométricas y resolver problemas geométricos de manera
          eficiente.
        </p>

        <Typography variant='h6' gutterBottom>
          Instalación y configuración de la librería CGAL
        </Typography>
        <p>
          A continuación, te presento una guía paso a paso para la instalación y
          configuración de CGAL en un sistema operativo Windows 10. Si deseas
          sumergirte en el fascinante mundo de la geometría computacional y
          aprovechar al máximo las capacidades de CGAL, sigue los siguientes
          pasos:
          <ol>
            <li>
              Visita el sitio web oficial de CGAL (www.cgal.org) en tu
              navegador.
            </li>
            <li>
              Busca la sección de descargas y localiza la versión de CGAL
              compatible con tu sistema operativo.
            </li>
            <li>
              Haz clic en el enlace de descarga y guarda el archivo en una
              ubicación accesible en tu computadora.
            </li>
            <li>
              Una vez que la descarga se haya completado, navega hasta la
              ubicación donde se guardó el archivo y descomprímelo si es
              necesario.
            </li>
            <li>
              Abre la carpeta resultante y busca el archivo de instalación o
              script de configuración.
            </li>
            <li>
              Ejecuta el archivo de instalación o script haciendo doble clic en
              él.
            </li>
            <li>
              Sigue las instrucciones proporcionadas por el asistente de
              instalación o script de configuración. Lee cuidadosamente cada
              paso y elige las opciones que mejor se adapten a tus necesidades.
            </li>
            <li>
              En algunos casos, es posible que se te solicite instalar
              dependencias adicionales o bibliotecas requeridas por CGAL.
              Asegúrate de instalar todas las dependencias necesarias según las
              indicaciones proporcionadas.
            </li>
            <li>
              Espera a que se complete la instalación. Esto puede llevar algún
              tiempo, dependiendo de la velocidad de tu computadora y la
              configuración elegida.
            </li>
            <li>
              Una vez que la instalación se haya completado con éxito, verifica
              si CGAL está correctamente configurado en tu sistema. Puedes
              hacerlo abriendo una terminal o línea de comandos y ejecutando un
              ejemplo o probando algunos comandos básicos de CGAL.
            </li>
            <li>
              Si los pasos anteriores se han realizado correctamente y no se han
              producido errores, ¡enhorabuena! CGAL está instalado y listo para
              su uso en tu sistema.
            </li>
          </ol>
          Recuerda consultar la documentación oficial de CGAL para obtener más
          detalles sobre su uso y aprovechar al máximo sus capacidades.
          ¡Disfruta de la geometría computacional con CGAL y explora las
          diversas aplicaciones que ofrece este poderoso software!
          <br />
          <br />
          Para más información consulta la página oficial de CGAL{' '}
          <a
            href='https://doc.cgal.org/latest/Manual/windows.html'
            target='_blank'
          >
            CGAL en windows
          </a>
        </p>
        <Typography variant='h6' gutterBottom>
          Instalación CGAL
        </Typography>
        <p>
          A continuación, te presento una guía paso a paso para la instalación y
          configuración de CGAL en un sistema operativo Windows 10. Si deseas
          sumergirte en el fascinante mundo de la geometría computacional y
          aprovechar al máximo las capacidades de CGAL, sigue los siguientes
          pasos:
        </p>

        <ol>
          <li>
            Abre el directorio del ejercicio que deseas ejecutar en tu editor de
            código preferido.
          </li>
          <li>
            Asegúrate de que el directorio del ejercicio contenga un archivo
            CMakeLists.txt. Este archivo contiene las instrucciones necesarias
            para compilar y ejecutar el ejercicio utilizando CMake.
          </li>
          <li>
            Abre una terminal o línea de comandos y navega hasta el directorio
            del ejercicio.
          </li>
          <li>
            Crea un directorio de compilación dentro del directorio del
            ejercicio. Esto se puede hacer ejecutando el siguiente comando en la
            terminal:
            <br />
            <code>mkdir build</code>
          </li>
          <li>
            Cambia al directorio de compilación recién creado:
            <br />
            <code>cd build</code>
          </li>
          <li>
            Genera los archivos de compilación utilizando CMake. Ejecuta el
            siguiente comando en la terminal:
            <br />
            <code>cmake ..</code>
          </li>
          <li>
            Una vez que CMake haya generado los archivos de compilación, puedes
            compilar el ejercicio ejecutando el siguiente comando en la
            terminal:
            <br />
            <code>cmake --build .</code>
          </li>
          <li>
            Después de que la compilación se haya completado con éxito, puedes
            ejecutar el ejercicio utilizando el comando específico proporcionado
            en el archivo CMakeLists.txt. Por lo general, se usará un comando
            como este:
            <br />
            <code>./ejercicio</code>
            <br />
            Reemplaza "ejercicio" con el nombre del archivo ejecutable generado
            durante la compilación.
          </li>
        </ol>

        <p>
          Siguiendo estos pasos, podrás compilar y ejecutar los ejercicios de
          CGAL utilizando CMake en Windows 10. Recuerda consultar la
          documentación del ejercicio y el archivo CMakeLists.txt para obtener
          instrucciones específicas adicionales si es necesario.
        </p>
        <p>
          A continuación se mostrarán los ejercicios hechos en C++ usando la
          librería de CGAL
        </p>

        <p>
          IMPORTANTE es necesario tener este{' '}
          <a href={CMakeList} download='' target='_blank'>
            archivo
          </a>
          para la ejecución y construcción de los ejercicios realizados en CGAL
        </p>

        <Typography variant='h3' gutterBottom>
          Ejercicios CGAL
        </Typography>
        <hr />
        <div className='ejercicios'>
          <div className='ejercicio'>
            <h3>Envolvente convexa</h3>
            <p>
              Este ejercicio creado en QtCreator usando la librería de CGAL
              muestra un ejemplo de lo que se refiere a lo que es la envolvente
              convexa
            </p>

            <div className='descripcion_ejercicio'>
              <p>
                La envolvente convexa es un concepto fundamental en geometría y
                teoría de conjuntos. Se refiere al menor conjunto convexo que
                contiene a un conjunto dado de puntos en el espacio <br />
                En términos más sencillos, si tienes un conjunto de puntos
                dispersos en el espacio, la envolvente convexa es el polígono
                convexo más pequeño o el poliedro convexo más pequeño
                (dependiendo de la dimensión del espacio) que contiene todos los
                puntos del conjunto. <br />
                La envolvente convexa se puede visualizar imaginando que se toma
                una goma elástica y se envuelve alrededor de los puntos,
                estirándola hasta que se ajuste de manera convexa. La forma
                resultante es la envolvente convexa. <br />
                La envolvente convexa tiene varias propiedades interesantes. Por
                ejemplo, cualquier punto en el interior de la envolvente convexa
                se puede expresar como una combinación convexa de los puntos
                originales del conjunto. Además, la envolvente convexa es el
                conjunto más pequeño que satisface esta propiedad. <br />
                La envolvente convexa tiene aplicaciones en diversos campos,
                como la geometría computacional, la optimización, la
                investigación de operaciones y la visión por computadora. Se
                utiliza para resolver problemas relacionados con la convexidad,
                como la búsqueda de puntos extremos, la separación de conjuntos
                y el cálculo de intersecciones convexas, entre otros. <br />
              </p>
              <p>
                Puedes descargar el código haciendo clic <a href=''>aquí</a>
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardC
                  img={elefante}
                  title='Elefante'
                  description='LoremkjdbgdsujkfbkjfbdjkB'
                  alt=''
                />
                <CardC img={espiral_run} title='' description='' alt='' />
              </div>
            </div>
          </div>

          <div className='ejercicio1 ejercicio'>
            <h3>Ejercicio 1: Elefante (Introducción a Gmsh)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              rerum, culpa dolore veniam alias optio! Vel expedita, doloremque
              placeat explicabo debitis nemo quis similique in praesentium
              adipisci, eos velit esse. Odit molestiae asperiores corrupti
              architecto optio impedit eligendi commodi! Iste, maiores tempora
              consequatur, enim fugiat aliquid laborum soluta voluptatem
              praesentium velit exercitationem doloribus accusantium voluptas,
              qui dicta. Tenetur, sed accusamus! Sapiente consequuntur sit
              delectus labore, iste consectetur atque non impedit eveniet porro
              numquam aliquid, assumenda quidem temporibus? Voluptatem quae
              numquam hic tempore quos aut iusto est quasi? Similique, eligendi
              dolor! Ullam veniam magnam, quod officia quis voluptate esse dicta
              obcaecati, pariatur ex eaque eveniet accusantium aliquam facere
              delectus et, labore ratione suscipit aperiam sed. Est ratione
              dicta ullam itaque eum. Ipsam fuga, explicabo totam reiciendis
              dolore commodi dolorum ad neque consequuntur velit eius eum
              accusamus adipisci voluptatibus aliquam maiores eligendi harum ut
              quisquam iure doloremque suscipit ipsum sapiente asperiores.
              Earum!
            </p>
          </div>
          <div className='ejercicio'>
            <h3>Ejercicio 2 corazón y cráneo </h3>
            <p>
              Se muestra la construcción de 2 objetos en código con C++ usando
              la librería CGAL en el cual uno tendrá la forma de un córazon y el
              otro de un cráneo El código lo puedes descargar aquí{' '}
              <a href={heartCPP} download=''>
                heart.cpp
              </a>{' '}
              y
              <a href={skullCPP} download=''>
                skull.cpp
              </a>
            </p>
            <Carousel animation='slide' navButtonsAlwaysVisible={true}>
              {itemData.map((img) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <img src={img.img} className='img' />
                </div>
              ))}
            </Carousel>
            <p>
              <a href='../resources/#' target='_blank'>
                Descarga el código fuente aquí
              </a>
            </p>
            <p>
              Primero se mostrará cuando elegimos el rotor como argumento
              <img src={rotor_msh} alt='' className='img' />
            </p>
            <p>
              Este es el resultado de poner como argumento una cabeza de león
              <img src={lios_msh} alt='' className='img' />
            </p>
            <p>
              Finalmente un ejercicio que se había mencioando anteriormente el
              cual es el elefante
              <img src={elefante} alt='' className='img' />
            </p>
          </div>
          <div className='ejercicio skull'>
            <h3>Cráneo</h3>
            <p className='text'>
              Este ejercicio tratará sobre una figura de un cráneo para hacerlo
              de forma sólida
            </p>
            <p>
              <a href={skullCPP} target='_blank'>
                Descarga código fuente aquí
              </a>
            </p>
            <p>
              Ahora en nuestro programa de Gmsh podremos ver lo siguiente
              <img src={skull_msh} alt='' className='img' />
            </p>
          </div>
        </div>
      </Grid>
      <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
      />
    </Grid>
  )
}
