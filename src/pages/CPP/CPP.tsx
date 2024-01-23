import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import { Divider, Grid, Typography } from '@mui/material'
import Sidebar from '../home/components/Sidebar'
import bibliotecas from '../../assets/img/c++_bibliotecas.png'
import generator from '../../assets/img/c++_generator.png'
import main from '../../assets/img/c++_main.png'
import cpp_logo from '../../assets/img/c++.png'

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

export default function CPP({ title }: { title: string }) {
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
            src={cpp_logo}
            alt=''
            style={{ height: '10rem', width: '10rem' }}
          />
          <p>
            C++ es un lenguaje de programación orientado a objetos muy potente
            que evolucionó de la extensión de lenguaje informático “C” y que hoy
            en día sigue usándose para realizar programación estructurada de
            alto nivel y rendimiento, como sistemas operativos, videojuegos y
            aplicaciones en la nube. Se trata de una de las herramientas
            programáticas más versátiles y completas, por esa razón un
            programador C++ con experiencia es un perfil profesional con mucha
            demanda en toda clase de proyectos tecnológicos.
          </p>
        </div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/JruaQnzwkDQ?si=UEtZko3Lwd4I2dzR'
          title='YouTube video player'
          // frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          // allowfullscreen
        ></iframe>
        <Typography variant='h6' gutterBottom>
          Explicación del programa
        </Typography>
        <p>
          A continuación, se presenta una explciación detallada del
          funcionamiento de cada una de las partes que componen el programa. En
          el video podrás ver el programa en funcionamiento.
          <ol>
            <li>
              Incluye las bibliotecas necesarias:
              <br />
              <img src={bibliotecas} alt='' />
              <p>
                &lt;iostream&gt;: Proporciona las funciones para entrada y
                salida estándar.
                <br />
                &lt;vector&gt;: Proporciona la clase vector para almacenar una
                secuencia dinámica de elementos.
                <br />
                &lt;algorithm&gt;: Proporciona funciones de algoritmo, como
                std::sort para ordenar.
                <br />
              </p>
            </li>
            <li>
              Define una función generator:
              <br />
              <img src={generator} alt='' />
              <p>
                Esta función se declara antes de main para que el compilador
                conozca su firma antes de su uso.
              </p>
            </li>
            <li>
              La función main:
              <br />
              <img src={main} alt='' />
              <ul>
                <li>El programa comienza ejecutando la función main.</li>
                <li>
                  Declara un entero n para almacenar el número ingresado por el
                  usuario y un vector randoms para almacenar los números
                  aleatorios.
                </li>
                <li>
                  El usuario ingresa un número que determina cuántos números
                  aleatorios se generarán.
                </li>
                <li>
                  Llama a la función generator para llenar el vector randoms con
                  números aleatorios.
                </li>
                <li>Muestra los números generados antes de ordenarlos.</li>
                <li>
                  Llama a std::sort para ordenar los números en el vector
                  randoms.
                </li>
                <li>Muestra los números ordenados.</li>
                <li>Finaliza el programa con return 0;.</li>
              </ul>
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
