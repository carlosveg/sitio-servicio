import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import { Divider, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import alambre_run from '../../assets/img/alambre_run.png'
import alambre_run_1 from '../../assets/img/alambre_run_1.png'
import alambre_run_2 from '../../assets/img/alambre_run_2.png'
import alambre_run_3 from '../../assets/img/alambre_run_3.png'
import alambre_run_4 from '../../assets/img/alambre_run_4.png'
import alambre_run_5 from '../../assets/img/alambre_run_5.png'
import placas_run from '../../assets/img/placas_run.png'
import placas_run_1 from '../../assets/img/placas_run_1.png'
import placas_run_2 from '../../assets/img/placas_run_2.png'
import placas_run_3 from '../../assets/img/placas_run_3.png'
import placas_run_4 from '../../assets/img/placas_run_4.png'
import elastic_run from '../../assets/img/elastic_run.png'
import elastic_run_1 from '../../assets/img/elastic_run_1.png'
import elastic_run_2 from '../../assets/img/elastic_run_2.png'
import elastic_run_3 from '../../assets/img/elastic_run_3.png'
import elastic_run_4 from '../../assets/img/elastic_run_4.png'
import elastic_run_5 from '../../assets/img/elastic_run_5.png'
import small_waveguides from '../../assets/img/small_waveguides.png'
import calor from '../../assets/img/calor.jpg'
import calor1 from '../../assets/img/calor1.jpg'
import Sidebar from '../home/components/Sidebar'

const alambres = [
  {
    img: alambre_run,
    title: ''
  },
  {
    img: alambre_run_1,
    title: ''
  },
  {
    img: alambre_run_2,
    title: ''
  },
  {
    img: alambre_run_3,
    title: ''
  },
  {
    img: alambre_run_4,
    title: ''
  },
  {
    img: alambre_run_5,
    title: ''
  }
]

const placas = [
  {
    img: placas_run,
    title: ''
  },
  {
    img: placas_run_1,
    title: ''
  },
  {
    img: placas_run_2,
    title: ''
  },
  {
    img: placas_run_3,
    title: ''
  },
  {
    img: placas_run_4,
    title: ''
  }
]

const elastics = [
  {
    img: elastic_run,
    title: ''
  },
  {
    img: elastic_run_1,
    title: ''
  },
  {
    img: elastic_run_2,
    title: ''
  },
  {
    img: elastic_run_3,
    title: ''
  },
  {
    img: elastic_run_4,
    title: ''
  },
  {
    img: elastic_run_5,
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

export default function OneLab({ title }: { title: string }) {
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
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   gap: '1rem'
        // }}
        >
          <img
            src={small_waveguides}
            alt=''
            // style={{ height: '10rem', width: '10rem' }}
          />
          <p>
            OneLab es una plataforma de simulación basada en la nube que permite
            a los usuarios crear y ejecutar experimentos virtuales en diversos
            campos, incluida la física. Con su enfoque en la geometría
            computacional, OneLab ofrece una amplia gama de herramientas y
            funciones para diseñar y simular sistemas físicos complejos. Los
            usuarios pueden crear modelos geométricos, aplicar condiciones y
            restricciones, y realizar análisis detallados de sus simulaciones,
            lo que les permite explorar y comprender mejor los conceptos de
            geometría aplicada a la física.
          </p>
        </div>

        <Typography variant='h6' gutterBottom>
          Instalación y configuración One Lab
        </Typography>

        <p>
          A continuación, te presento una descripción de cómo instalar y
          configurar OneLab:
        </p>
        <ol>
          <li>
            Visita el sitio web oficial de OneLab en tu navegador web preferido.
          </li>
          <li>
            Busca la sección de descargas y asegúrate de seleccionar la versión
            de OneLab compatible con tu sistema operativo.
          </li>
          <li>
            Haz clic en el enlace de descarga correspondiente y guarda el
            archivo de instalación en una ubicación accesible en tu computadora.
          </li>
          <li>
            Una vez que la descarga se haya completado, navega hasta el
            directorio donde se guardó el archivo de instalación y haz doble
            clic en él para iniciar el proceso de instalación.
          </li>
          <li>
            Sigue las instrucciones proporcionadas por el asistente de
            instalación. Lee cuidadosamente cada paso y elige las opciones que
            mejor se adapten a tus necesidades.
          </li>
          <li>
            Durante la instalación, es posible que se te solicite proporcionar
            información adicional, como la ubicación de instalación o las
            credenciales de acceso. Asegúrate de completar estos campos según
            corresponda.
          </li>
          <li>
            Una vez que la instalación se haya completado con éxito, abre OneLab
            desde el acceso directo en tu escritorio o menú de inicio.
          </li>
          <li>
            Al abrir OneLab por primera vez, es posible que se te solicite
            iniciar sesión con tu cuenta de usuario o crear una nueva cuenta.
            Sigue las instrucciones proporcionadas y completa el proceso de
            inicio de sesión.
          </li>
          <li>
            Una vez que hayas iniciado sesión, podrás comenzar a utilizar OneLab
            y acceder a todas sus funcionalidades y herramientas.
          </li>
          <li>
            Para configurar OneLab según tus necesidades específicas, explora la
            interfaz y busca las opciones de configuración. Puedes personalizar
            preferencias, ajustes de notificación, fuentes de datos, y más,
            según estén disponibles en la aplicación.
          </li>
        </ol>
        <p>
          Recuerda consultar la documentación oficial de OneLab para obtener más
          detalles sobre su uso y aprovechar al máximo sus capacidades. Explora
          las características disponibles y descubre cómo OneLab puede ayudarte
          en tus tareas relacionadas con geometría computacional y física.
          ¡Disfruta de tu experiencia con OneLab!
        </p>

        <Typography variant='h3' gutterBottom>
          Ejercicios ONE Lab
        </Typography>
        <hr />
        <div className='ejercicios'>
          <div className='ejercicio ejercicio-alambre'>
            <h2>Ejercicio alambre</h2>
            <p>
              Primero se muestra los archivos abiertos en gmsh antes de correr
              los archivos
              <img src='../img/alambre_before_run.PNG' alt='' />
            </p>
            <p>
              Ahora se muestra la ejecución de este ejercicio en gmsh en el cual
              podremos observar su campo eléctrico
            </p>
            <Carousel animation='slide' navButtonsAlwaysVisible={true}>
              {alambres.map((img) => (
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
          </div>
          <div className='ejercicio ejercicio-placas'>
            <h2>Ejercicio placas</h2>
            <p>
              Se muestra la imagen al abrir los archivos creados y configurados
              en FreeCAD
              <img src='../img/placas_before_run.PNG' alt='' />
            </p>
            <p>
              Ahora se muestra la ejecución de este ejercicio en gmsh en el cual
              podremos observar su campo magnético
            </p>
            <Carousel animation='slide' navButtonsAlwaysVisible={true}>
              {placas.map((img) => (
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
          </div>
          <div className='ejercicio ejercicio-elasticidad'>
            <h2>Propiedades de elasticidad</h2>
            <p>
              Se muestra el objeto en el cual podramos observar los cambios
              fisicos del cuerpo.
              <img src='../img/elastic_before_run.PNG' alt='' />
            </p>
            <p>Ahora vemos la ejecución del ejercicio</p>
            <Carousel animation='slide' navButtonsAlwaysVisible={true}>
              {elastics.map((img) => (
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
          </div>
          <div className='ejercicio'>
            <h2>Análisis del calor sobre un cuerpo</h2>
            <p>
              Se hará una breve descripción sobre el comportamiento del calor
              sobre un cuerpo
              <img src={calor} alt='' className='img' />
              <img src={calor1} alt='' className='img' />
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
