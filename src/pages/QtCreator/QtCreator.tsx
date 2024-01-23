import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import { Divider, Grid, Typography } from '@mui/material'
import Sidebar from '../home/components/Sidebar'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'
import img4 from '../../assets/img/img4.png'
import img5 from '../../assets/img/img5.png'
import img6 from '../../assets/img/img6.png'
import img7 from '../../assets/img/img7.png'
import img8 from '../../assets/img/img8.png'
import img9 from '../../assets/img/img9.png'
import img10 from '../../assets/img/img10.png'
import img11 from '../../assets/img/img11.png'
import img12 from '../../assets/img/img12.png'
import runProject from '../../assets/img/correr_proyecto.png'
import ventana_prueba1 from '../../assets/img/ventana_prueba1.png'
import ventana_prueba2 from '../../assets/img/ventana_prueba2.png'
import ventana_prueba3 from '../../assets/img/ventana_prueba3.png'
import ventana_prueba4 from '../../assets/img/ventana_prueba4.png'
import boton_segundaforma from '../../assets/img/boton_segundaforma.png'
import Qt_logo from '../../assets/img/Qt_logo_2016.svg.png'
import edit_lineedit from '../../assets/img/edit_lineedit.png'
import codigo_clock from '../../assets/img/codigo_clock.png'
import ejecution_clock from '../../assets/img/ejecution_clock.png'
import example_clock from '../../assets/img/example_clock.png'
import code_textfinder from '../../assets/img/code_textfinder.png'
import ejecution_textfinder from '../../assets/img/ejecution_textfinder.png'
import run_textfinder from '../../assets/img/run_textfinder.png'

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

export default function QtCreator({ title }: { title: string }) {
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <img
            src={Qt_logo}
            alt=''
            style={{ height: '10rem', width: '10rem' }}
          />
          <p>
            QtCreator es un entorno de desarrollo integrado (IDE) que ofrece una
            amplia gama de herramientas para la creación de aplicaciones
            gráficas y de interfaz de usuario. Es altamente versátil y fácil de
            usar, permitiendo a los usuarios crear y desarrollar programas de
            geometría computacional de manera eficiente. Con QtCreator, los
            usuarios podrán aprovechar una interfaz intuitiva y herramientas de
            depuración avanzadas, lo que les permitirá construir y visualizar
            geometría compleja de manera rápida y precisa.
          </p>
        </div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/rKdqAEBoMtY?si=39B1SqcLz1QQ6eUa'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
        <Typography variant='h6' gutterBottom>
          Instalación y configuración de QtCreator
        </Typography>
        <p>
          Instalación y Configuración de QtCreator: Guía Paso a Paso A
          continuación, te presentaré una detallada guía para la instalación y
          configuración del software QtCreator, utilizando la propia
          documentación y guía de instalación proporcionada por el programa.
          <ol>
            <li>
              Paso 1: Descarga del software
              <br />
              Dirígete al sitio web oficial de QtCreator (www.qt.io) y busca la
              sección de descargas. Asegúrate de seleccionar la versión
              compatible con tu sistema operativo. Descarga el instalador
              correspondiente y guárdalo en una ubicación accesible en tu
              computadora.
            </li>
            <li>
              Paso 2: Ejecutar el instalador
              <br />
              Una vez que se haya completado la descarga, localiza el archivo de
              instalación y ejecútalo haciendo doble clic en él. Se abrirá el
              asistente de instalación de QtCreator.
            </li>
            <li>
              Paso 3: Configuración del instalador
              <br />
              El asistente de instalación te guiará a través de diferentes
              opciones y configuraciones. Lee cuidadosamente cada paso y elige
              las opciones que mejor se adapten a tus necesidades. Asegúrate de
              seleccionar los componentes relevantes para la geometría
              computacional y la física.
            </li>
            <li>
              Paso 4: Ubicación de instalación <br />
              En este paso, se te solicitará que selecciones la ubicación de
              instalación de QtCreator en tu sistema. Puedes optar por la
              ubicación predeterminada o elegir una ruta personalizada.
              Selecciona la opción que prefieras y continúa con la instalación.
            </li>
            <li>
              Paso 5: Configuración adicional <br />
              Durante la instalación, es posible que se te soliciten otras
              configuraciones opcionales, como la integración con otros
              programas o la configuración del entorno de desarrollo. Sigue las
              instrucciones y configura estas opciones según tus preferencias.
            </li>
            <li>
              Paso 6: Finalización de la instalación <br />
              Una vez que hayas completado todas las configuraciones y opciones,
              el instalador comenzará a instalar QtCreator en tu sistema. Esto
              puede llevar algún tiempo, dependiendo de la velocidad de tu
              computadora.
            </li>
            <li>
              Paso 7: Configuración inicial de QtCreator Una vez que la
              instalación se haya completado con éxito, ejecuta QtCreator desde
              el menú de inicio o el acceso directo en tu escritorio. En la
              primera ejecución, se te solicitará que realices algunas
              configuraciones iniciales, como la selección del kit de
              compilación y la configuración del perfil de usuario. Sigue las
              instrucciones proporcionadas y configura estos aspectos según tus
              preferencias y entorno de desarrollo.
            </li>
          </ol>
          ¡Enhorabuena! Ahora tienes QtCreator instalado y configurado en tu
          sistema. Puedes comenzar a explorar la amplia gama de características
          y herramientas que ofrece este potente entorno de desarrollo integrado
          para la geometría computacional y la física. Recuerda consultar la
          documentación oficial de QtCreator para obtener más detalles sobre su
          uso y aprovechar al máximo sus capacidades. ¡Disfruta de tu
          experiencia de programación con QtCreator y explora el emocionante
          mundo de la geometría computacional orientada a la física!
        </p>
        <Typography variant='h6' gutterBottom>
          Introducción a QT Creator
        </Typography>
        <p>
          En esta sección se explicará las formas en las que podemos agregar
          SIGNAL y SLOT
        </p>

        <div className='presentacion'>
          <h2>Forma 1: Agregando SIGNAL y SLOT desde Design</h2>
          <p>
            Tenemos un proyecto ya creado que nombramos boton1. Una vez creado
            nos vamos a la carpeta llamada Forms y le damos doble clic al
            archivo mainwindows.ui
          </p>
          <img src={img1} alt='' className='img' />
          <p>
            Ahora nos vamos a la parte Design y en la parte izquierda podremos
            observar diferentes objetos que podemos insertar en la parte central
            de nuestra ventana. En este caso arrastraremos un Push Button
          </p>
          <img src={img2} alt='' className='img' />
          <p>
            En la parte baja de la ventana, tendremos la parte para añadir
            SIGNAL y SLOT Y hay 4 partes que son Sender, Signal, Receiver, Slot.
            <br />
            Sender: Será el que envie la señal y que objeto será.
            <br />
            Signal: Muestra qué tipo de señal será mandada por el sender.
            <br />
            Receiver: El objeto que recibirá la señal.
            <br />
            Slot: Que hará el objeto que recibió la señal
          </p>
          <img src={img3} alt='' className='img' />
          <p>
            Finalmente guadaremos y correremos el boton de Run{' '}
            <img src={runProject} alt='' className='img_short' />
            para poder observar nuestro trabajo
          </p>
          <img src={ventana_prueba1} alt='' className='img' />
          <p>
            Le damos clic y se cerrará ya que le dimos el Slot de close que
            cierra objetos
          </p>
          <h2>Forma 2: Signal y Slot por código</h2>
          <p>
            Ahora seguiremos todos los pasos de ejemplo anterior hasta la parte
            de haber puesto el objeto de ventana
          </p>
          <img src={img4} alt='' className='img' />
          <p>
            Despues nos vamos hacia la parte izquierda y le damos clic en edit
            para asi poder seleccionar el archivo mainwindow.cpp que se
            encuentra en la carpeta Source.
          </p>
          <img src={boton_segundaforma} alt='' className='img' />
          <p>
            Debajo de la línea ui.setup(this); */línea 8*/ pondremos el
            siguiente comando conect() que recibe 4 parámetros como argumentos
            que son sender, signal, receiver y slot. Sender: Será el que envie
            la señal y que objeto será.
            <br />
            Signal: Muestra qué tipo de señal será mandada por el sender.
            <br />
            Receiver: El objeto que recibirá la señal.
            <br />
            Slot: Que hará el objeto que recibió la señal
          </p>
          <img src={img5} alt='' className='img' />
          <p>
            Ahora ejecutaremos el proyecto en el mismo botón.{' '}
            <img src={runProject} alt='' className='img_short' />Y si le damos
            clic al botón con texto salida se cerrará la ventana
          </p>
          <img src={ventana_prueba2} alt='' className='img' />

          <p></p>
          <h2>Forma 3:Creando un elemento por código </h2>
          <p>
            Una vez creado nuestro proyecto nos vamos a la carpte de headers y
            abrimos el archivo de mainwindow.cpp y en private definimos el
            elemento QPushButton que es un apuntador. Además llamanos en la
            parte de arriba la librería para poder usar el objeto QPushButton
          </p>
          <img src={img6} alt='' className='img' />
          <p>
            Ahora nos vamos a nuestro archivo mainwindow.cpp que se encuentra en
            la capeta Sources Y usaremos la función conect en cual le mandaremos
            como argumento estos parámetros <br />
            Sender: Será el que envie la señal y que objeto será.
            <br />
            Signal: Muestra qué tipo de señal será mandada por el sender.
            <br />
            Receiver: El objeto que recibirá la señal.
            <br />
            Slot: Que hará el objeto que recibió la señal
          </p>
          <img src={img7} alt='' className='img' />
          <p>
            Ahora ejecutaremos el proyecto en el mismo botón.{' '}
            <img src={runProject} alt='' className='img_short' />Y si le damos
            clic al botón con texto salida se cerrará la ventana
          </p>
          <img src={ventana_prueba3} alt='' className='img' />
          <p></p>
          <h2>Forma 4: Creando métodos </h2>
          <p>
            Añadimos un botón como en la primera forma que se menciona. Hiremos
            a nuestra carpeta Forms y abriremos nuestro archivo mainwindow.ui
          </p>

          <img src={img8} alt='' className='img' />
          <p>Y arrastraremos un PushButtom hacia nuestra ventana de edición</p>
          <img src={img9} alt='' className='img' />
          <p>
            Ahora nos vamos a nuestro archivo mainwindows.h que se encuentra en
            la carpeta Headers Declaramos un slot en la parte private que sera
            un método que podemos invocar.
          </p>
          <img src={img10} alt='' className='img' />
          <p>
            Después iremos al archivo mainwindows.cpp y ahí diremos la
            funcionalidad que tendra el método que creamos anteriormente. El
            método describe que se cerrará la ventana principal
          </p>
          <img src={img11} alt='' className='img' />
          <p>
            Ahora ejecutaremos el proyecto en el mismo botón.{' '}
            <img src={runProject} alt='' className='img_short' />Y si le damos
            clic al botón con texto salida se cerrará la ventana
          </p>
          <img src={ventana_prueba4} alt='' className='img' />
        </div>

        {/* TODO: Drogas */}
        <div className='ejercicios'>
          <div className='titulo_ejercicio'>
            <Typography variant='h3' gutterBottom>
              Ejercicios en QT Creator
            </Typography>
            <p>
              En esta sección se mostrará los ejercicios realizados en QT
              Creator
            </p>
          </div>
          <hr />
          <div className='label_text'>
            <h2>Campos de texto y etiquetas</h2>
            <p>
              Como todo ejercicio anterior, empezaremos creando un proyecto en
              el cual podemos llamarlo de cualquier forma.
              <br />
              Una vez creado nos vamos al archivo mainwindow.ui que se encuentra
              en la carpeta Forms
            </p>
            <img src={img12} alt='' className='img' />
            <p>
              Ahora usaremos campos de texto y etiquetas <br /> Primero
              agregaremos las etiquetas y los campos de texto
            </p>
            <img src={edit_lineedit} alt='' className='img' />
          </div>

          <div className='digital_clock'>
            <h2>Digital clock</h2>
            <p>
              Ahora se realizará un ejercicio que simulará la hora exacta que
              posee nuestro equipo de cómputo.
            </p>
            <p>
              Se muestra el código que obtendrá el hora de nuestro equipo de
              cómputo, así como también la impresión en pantalla de el tiempo
            </p>
            <img src={codigo_clock} alt='' className='img' />
            <p>Se mostrará el código de la ejecución de la aplicación</p>
            <img src={ejecution_clock} alt='' className='img' />
            <p>Al final este es el resultado de nuestro ejercicio</p>
            <img src={example_clock} alt='' className='img' />
          </div>
          <div className='textfinder'>
            <h2>Text finder</h2>
            <p>
              Se creará una aplicación en la que se buscará una palabra dentro
              de un texto previamente ya creada
            </p>
            <p>Se muestra el código que esta conformado por funciones</p>
            <img src={code_textfinder} alt='' className='img' />
            <p>Código de la ejecución de la aplicación</p>
            <img src={ejecution_textfinder} alt='' className='img' />
            <p>Aquí se muestra el ejercicio en ejecución</p>
            <img src={run_textfinder} alt='' className='img' />
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
