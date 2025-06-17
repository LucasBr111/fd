document.addEventListener('DOMContentLoaded', () => {
    const booksGrid = document.querySelector('.books-grid');
    const bookDetailModal = new bootstrap.Modal(document.getElementById('bookDetailModal'));
    const modalBookImage = document.getElementById('modalBookImage');
    const modalBookTitle = document.getElementById('modalBookTitle');
    const modalBookAuthor = document.getElementById('modalBookAuthor');
    const modalBookYear = document.getElementById('modalBookYear');
    const modalBookGenre = document.getElementById('modalBookGenre');
    const modalBookDescription = document.getElementById('modalBookDescription');
    const modalFooter = document.querySelector('#modalFooter'); // Correcto, asume que #modalFooter existe en tu HTML


    // Datos de ejemplo de libros
    const books = [
        {
            id: 1,
            title: 'La enseñanza de la ciencia naturales basadas en proyectos',
            author: 'Autor por definir',
            year: 2015,
            genre: 'Educación, Ciencias Naturales',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1GyfywlBiAQbEXe-JglBk73wIYlGJLCYW',
            description: 'Metodología para el trabajo por proyectos en Ciencias Naturales, enfocado en el aprendizaje activo y la investigación estudiantil.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=13IwKo-veY_qEgegvl_MPcOxH528LiXqh',
            url_resumen: 'https://ensenanza-ciencias-proye-tgtg85h.gamma.site/'
        },
        {
            id: 2,
            title: 'El juego de la formación docente',
            author: 'Autor por definir',
            year: 2024,
            genre: 'Educación, Metodología',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1dKETG6708Nd8twIIxBx0GlhkUFwx7Kch',
            description: 'Enfoques metodológicos modernos para la educación contemporánea.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1WMpeUvL_pRLvvw6HgIvZYIJB-JjE4DpB',
            url_resumen: 'https://el-juego-en-la-formacion-64u1utg.gamma.site/'
        },
        {
            id: 3,
            title: 'Antología de Cuentos',
            author: 'Varios Autores',
            year: 2024,
            genre: 'Literatura, Educación',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1WnGI4vumZfmf4hLfa6t2GTE9wcW5dXyB',
            description: 'Selección de cuentos para el desarrollo de la comprensión lectora y el análisis literario.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=18LjPe_0FThCsBwjGBWVHyJTgUFFR2jVQ',
            url_resumen: 'https://antologia-literaria-y2urvlc.gamma.site/'
        },
        {
            id: 4,
            title: 'Aprender a Enseñar con TIC en Educación Superior',
            author: 'Díaz, Autor',
            year: 2024,
            genre: 'Educación, Tecnología',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1Q8a0DIOcwLmnF1skVXv0682Oe2mdHlpP',
            description: 'Guía para la integración de las Tecnologías de la Información y Comunicación en la educación superior.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1iR3opC61OUkCwCqxpQwlk1iJtpP0Hywj',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_4' // Por favor, actualiza este enlace
        },
        {
            id: 5,
            title: 'Audífon de Haro - Ideas de Literatura y Teoría de Géneros Literarios',
            author: 'Audífon de Haro',
            year: 2016,
            genre: 'Literatura, Teoría Literaria',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1Zl2mzhSe_CDNPoGHAh952bipJEOd9LYm',
            description: 'Análisis profundo de la teoría de los géneros literarios y su aplicación en la enseñanza de la literatura.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1aUhfJzEBGxlTiFVzwvHZWTorpZux2R2o',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_5' // Por favor, actualiza este enlace
        },
        {
            id: 6,
            title: 'Cómo Planificar y Evaluar en el Aula',
            author: 'Brío, C.',
            year: 2024,
            genre: 'Educación, Planificación',
            // URL de imagen actualizada para incrustación directa
            /* NO es la imagen, es la imagen del siguiente  */
            /*  image: 'https://lh3.googleusercontent.com/d/17SoXqKCPVUybttT8wYSapCB7qMp1kSKR', */
            image: 'https://lh3.googleusercontent.com/d/1yZjEFFcBjffLu2x_a-mPeBfCdwIPY1Tz',
            description: 'Estrategias prácticas para la planificación y evaluación efectiva en el ambiente escolar.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1qYIBkjC4hjgfChShSXI_dgAdR7LSS1Ii',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_6' // Por favor, actualiza este enlace
        },
        {
            id: 7,
            title: 'Catálogo de Herramientas Digitales',
            author: 'Autor por definir',
            year: 2024,
            genre: 'Educación, Tecnología',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/17SoXqKCPVUybttT8wYSapCB7qMp1kSKR',

            description: 'Compendio de herramientas digitales útiles para la educación moderna y su implementación práctica.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1esNY8NRO_Zi7S1skuMUvbDsnHYMbI2cV',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_7' // Por favor, actualiza este enlace
        },
        {
            id: 8,
            title: 'Waldorf - Un Espacio para Aprender a Decir y Escuchar',
            author: 'COM - Waldorf',
            year: 2024,
            genre: 'Educación, Pedagogía Waldorf',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1VL8pw0K4WxlOranyE9YmfXyaee1-kSF0',

            description: 'Metodología Waldorf centrada en el desarrollo de la comunicación y la escucha activa en el proceso educativo.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=151E20vYbX4MTua_ka9CYJT2DGnbCrhs7',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_8' // Por favor, actualiza este enlace
        },
        {
            id: 9,
            title: 'Cómo Abordar la Educación del Futuro',
            author: 'Gisbert',
            year: 2024,
            genre: 'Educación, Futuro',
            image: 'https://lh3.googleusercontent.com/d/1HhcmW2UXCfymqo5TD25oM5cbQmNJ3Nkh',
            // URL de imagen actualizada para incrustación directa

            description: 'Perspectivas y estrategias para enfrentar los desafíos educativos del siglo XXI.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1W9vsN5r6lLh8bWlwUkDWMrpSLRys4Z0O',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_9' // Por favor, actualiza este enlace
        },
        {
            id: 10,
            title: 'Cómo Dar Clases a los que No Quieren',
            author: 'Vaello',
            year: 2024,
            genre: 'Educación, Motivación',
            image: 'https://lh3.googleusercontent.com/d/1xBJN4111d58wPam9sU_2MzfvGpzo3Nqo',
            // URL de imagen actualizada para incrustación directa

            description: 'Estrategias y técnicas para motivar y trabajar con estudiantes desmotivados o reticentes al aprendizaje.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1OwZsJ9Jt2aLu8B23yMdjRP8wOOKIK_EY',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_10' // Por favor, actualiza este enlace
        },
        {
            id: 11,
            title: 'Didáctica del Lenguaje y la Literatura',
            author: 'Autor por definir',
            year: 2024,
            genre: 'Educación, Literatura',
            image: 'https://lh3.googleusercontent.com/d/1UKb_oaqccdJ8oU-vc8WRran2p3fscWlN',
            // URL de imagen actualizada para incrustación directa

            description: 'Metodologías especializadas para la enseñanza del lenguaje y la literatura en diferentes niveles educativos.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1qwL6V0DleHv0TvIM0CNtKmtDclPXiI_a',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_11' // Por favor, actualiza este enlace
        },
        {
            id: 12,
            title: 'El Futuro de las Escuelas y la Formación de Maestros',
            author: 'Eduardo Andere',
            year: 2024,
            genre: 'Educación, Formación Docente',
            image: 'https://lh3.googleusercontent.com/d/1_vRHXi9Kt4nAsmrrrEaTQhCowufD6s86',
            // URL de imagen actualizada para incrustación directa

            description: 'Análisis prospectivo sobre cómo evolucionarán las escuelas y la formación de docentes en el futuro cercano.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1M_jKoJx65lySxfUM7jQxNqT9JyQqefCv',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_12' // Por favor, actualiza este enlace
        },
        {
            id: 13,
            title: 'Libro de Prácticas y Diagnósticos - Ciencias Naturales',
            author: 'Autor por definir',
            year: 2024,
            genre: 'Educación, Ciencias Naturales',
            /* image: 'https://lh3.googleusercontent.com/d/1NjnpXVsZxO-3AqlEfMYNISVUk0MGzj-h', */
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1Xc87DUgUo9aJ8X9cCyNISZckwjml9JHs',
            description: 'Material práctico para el diagnóstico y evaluación en ciencias naturales, con actividades experimentales.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1r7T9N1NUFrD4vYKz7W9LHN1o3D7CYvOQ',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_13' // Por favor, actualiza este enlace
        },
        {
            id: 14,
            title: 'Enseñar Hoy',
            author: 'Carrasco',
            year: 2024,
            genre: 'Educación, Metodología',
            // URL de imagen actualizada para incrustación directa (usa la misma URL del PDF si es la imagen de portada)
            image: 'https://lh3.googleusercontent.com/d/1PGIaPPWjjIu4NzFCDp66VHBn9WGhtHFm',
            description: 'Reflexiones y propuestas para la enseñanza en el contexto educativo actual.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1PGIaPPWjjIu4NzFCDp66VHBn9WGhtHFm',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_14' // Por favor, actualiza este enlace
        },
        {
            id: 15,
            title: 'Innovar en Educación, Sí Pero Cómo',
            author: 'Tricot',
            year: 2024,
            genre: 'Educación, Innovación',
            // URL de imagen actualizada para incrustación directa (usa la misma URL del PDF si es la imagen de portada)
            image: 'https://lh3.googleusercontent.com/d/1lGuqwgCbCu_lil4AmY2pSkN3xSdsQ3AT',
            description: 'Guía práctica para implementar innovaciones efectivas en el ámbito educativo.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1lGuqwgCbCu_lil4AmY2pSkN3xSdsQ3AT',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_14_A' // Por favor, actualiza este enlace
        },
        {
            id: 166, // Nota: Considera cambiar este ID si es posible para mantener una secuencia lógica (e.g., a 15, si el anterior es 14)
            title: 'Pedagogía del Juego - Traducción al Español',
            author: 'Autor por definir',
            year: 2024,
            genre: 'Educación, Pedagogía Lúdica',
            // URL de imagen actualizada para incrustación directa (usa la misma URL del PDF si es la imagen de portada)
            image: 'https://lh3.googleusercontent.com/d/1wOaI7NlrqP0EYSF4LCmuTH3vWQLiuJP4',
            description: 'Enfoques pedagógicos basados en el juego como herramienta fundamental para el aprendizaje.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1wOaI7NlrqP0EYSF4LCmuTH3vWQLiuJP4',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_15' // Por favor, actualiza este enlace
        },
        {
            id: 16, // Nota: Si tienes un ID 166, este 16 puede causar confusión. Verifica si es intencional.
            title: 'Pensar la Formación de Maestros Hoy',
            author: 'María Cristina Martínez Pineda et al.',
            year: 2024,
            genre: 'Educación, Formación Docente',
            // URL de imagen actualizada para incrustación directa (usa la misma URL del PDF si es la imagen de portada)
            image: 'https://lh3.googleusercontent.com/d/1IZJkLnboN3dlVT0zChKjF34ORa09O3bU',
            description: 'Propuesta pedagógica desde la experiencia para repensar la formación de maestros en la actualidad.',
            url_pdf: 'https://drive.google.com/uc?export=download&id=1IZJkLnboN3dlVT0zChKjF34ORa09O3bU',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_16' // Por favor, actualiza este enlace
        },
        {
            id: 18,
            title: 'Procesos Didácticos',
            author: 'Raúl Barrantes Clavijo',
            year: 2024,
            genre: 'Educación, Práctica Pedagógica',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1T5CbeLFN0FcTA-zQvYodnigAtOD7fSNI',
            description: 'Análisis comprensivo de la práctica pedagógica y su impacto en la formación integral de maestros.',
            url_pdf: 'https://drive.google.com/file/d/104wW_wlHLC1HMFGa2xc9xBaZbpAJH_dN/view?usp=drive_link',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_17' // Por favor, actualiza este enlace
        }, {
            id: 19,
            title: 'Transformando las prácticas de evaluación a través del trabajo colaborativa',
            author: 'Raúl Barrantes Clavijo',
            year: 2024,
            genre: 'Educación, Práctica Pedagógica',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1uPLOjCnT5KursF_e0wQwbNW1W75IHyRh',
            description: 'Análisis comprensivo de la práctica pedagógica y su impacto en la formación integral de maestros.',
            url_pdf: 'https://drive.google.com/file/d/1fUH2L4o8Ws-_8E_HeMRSdUur_bEvZ9xD/view?usp=drive_link',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_17' // Por favor, actualiza este enlace
        },
        {
            id: 20,
            title: 'Enfoques pedagógicos contemporáneos y posmodernos.',
            author: 'Sara Farfán Cruz',
            year: 2024,
            genre: 'Educación, Pedagogía',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1yTOIIX-MmwNfBEtFVwfx6ex-0syDEsPP',
            description: 'Exploración de los enfoques pedagógicos contemporáneos y posmodernos, con énfasis en su aplicación práctica.',
            url_pdf: 'https://drive.google.com/file/d/1RZdaGS7m1p1-o8rC_bUAmkxwuW3-lk4h/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_18' // Por favor, actualiza este enlace

        },

        {
            id: 21,
            title: 'Mini manual de Herramientas Google para Educación',
            author: 'Autor por definir',
            year: 2024,
            genre: 'Educación, Tecnología',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1S0tIQndWJ6OsLlzCEJ99jFlyJGc96Gr3',
            description: 'Guía práctica sobre el uso de herramientas Google en el ámbito educativo, facilitando la integración tecnológica en el aula.',
            url_pdf: 'https://drive.google.com/file/d/1QPOYZjQdCk86tcI1n95HMCG6tDRKRkbg/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_19' // Por favor, actualiza este enlace
        },
        {
            id: 22,
            title: 'Modelos pedagógicos y teorías del aprendizaje',
            author: 'Alexander Ortiz Ocaña',
            year: 2024,
            genre: 'Educación, Pedagogía',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1LAxHIq6CiRzAx45Qk0fve2yeNA7Vnc9R',
            description: 'Análisis de los modelos pedagógicos y teorías del aprendizaje más relevantes en la educación contemporánea, con aplicaciones prácticas.',
            url_pdf: 'https://drive.google.com/file/d/1A2CKyIh1IltQAtPAg2v0rlXxuJOhPrkz/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_20' // Por favor, actualiza este enlace
        },
        {
            id: 23,
            title: 'Pedagogía de la Tolerancia',
            author: 'Paulo Freire',
            year: 2024,
            genre: 'Educación, Filosofía',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1RUu8CpRpUTz7wASqN67t4WOUHA7SUadT',
            description: 'Reflexiones de Paulo Freire sobre la importancia de la tolerancia en la educación y su impacto en la formación integral del individuo.',
            url_pdf: 'https://drive.google.com/file/d/1WwLwtfIVhz_vRM5mfcGbI_ldOQySzTTc/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_21' // Por favor, actualiza este enlace
        },
        {
            id: 24,
            title: 'Metodología de la Gestión Curricular',
            author: 'Tobón',
            year: 2024,
            genre: 'Educación, Currículo',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/13TJsdE4WlrqTuq5gAVgTJBLxTjnp4OAh',
            description: 'Enfoques y estrategias para la gestión curricular efectiva, promoviendo una educación de calidad y pertinente.',
            url_pdf: 'https://drive.google.com/file/d/19imIiJcfkLNMoSWMvCQ5CttXDCLCRpbD/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_22' // Por favor, actualiza este enlace
        },
        {
            id: 25,
            title: 'El Acompañamiento Pedagógico',
            author: 'Taveras',
            year: 2024,
            genre: 'Educación, Acompañamiento',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1zPI1gA7CA6v2_gaalxLL8IexVhbpdq2f',
            description: 'Estrategias y metodologías para el acompañamiento pedagógico efectivo, centrado en el desarrollo profesional docente y la mejora continua.',
            url_pdf: 'https://drive.google.com/file/d/1Id3ClIu5ZOqJMy-HcL8OgILzCfSxZcUH/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_23' // Por favor, actualiza este enlace
        },
        {
            id: 26,
            title: 'Secuencias Didácticas. Aprendizaje y Evaluación de Competencias',
            author: 'Sergio Tobón Tobón, Julio Herminio Pimienta Rico y Juan Antonio García Fraile',
            year: 2024,
            genre: 'Educación, Didáctica',
            // URL de imagen actualizada para incrustación directa
            image: 'https://lh3.googleusercontent.com/d/1Q6zg-FW8B74pxCfg8jBGAJ36iLHyuKTn',
            description: 'Guía práctica sobre la elaboración de secuencias didácticas enfocadas en el aprendizaje y evaluación de competencias en el aula.',
            url_pdf: 'https://drive.google.com/file/d/1QGQnUMks9X7xkwVlFFQQJ9gWkPfvBdF4/view?usp=sharing',
            url_resumen: 'https://gamma.app/TU_ENLACE_AQUI_24' // Por favor, actualiza este enlace
        }

    ];

    function loadBooks() {
        booksGrid.innerHTML = ''; // Limpiar el grid antes de cargar
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-description">${book.description}</p>
            `;

            // El evento de clic para abrir el modal ahora va en toda la tarjeta
            bookCard.addEventListener('click', () => showBookDetail(book));

            booksGrid.appendChild(bookCard);
        });
    }

    function showBookDetail(book) {
        // **¡AQUÍ ESTÁ LA CORRECCIÓN CLAVE!**
        // Usa la imagen específica del libro, no una imagen hardcodeada.
        modalBookImage.src = book.image;

        modalBookTitle.textContent = book.title;
        // Estas líneas ya estaban correctas para mostrar la info en el modal:
        modalBookAuthor.textContent = book.author || 'Desconocido';
        modalBookYear.textContent = book.year || 'N/A';
        modalBookGenre.textContent = book.genre || 'N/A';
        modalBookDescription.textContent = book.description;

        // **Restablece la visibilidad de los botones al inicio de la función**
        // (Esto es crucial para que no se queden visibles de un libro anterior si el nuevo no los tiene)
        modalResumeButton.style.display = 'none';
        modalDownloadButton.style.display = 'none';

        // Manejar el botón de resumen (ahora un <a>)
        if (book.url_resumen && book.url_resumen !== 'https://gamma.app/TU_ENLACE_AQUI_X') { // Agrega verificación de placeholder
            modalResumeButton.style.display = 'inline-block';
            modalResumeButton.href = book.url_resumen;
        }

        // Manejar el botón de descarga (ahora un <a>)
        if (book.url_pdf && book.url_pdf !== 'https://drive.google.com/uc?export=download&id=ID_DE_EJEMPLO') { // Agrega verificación de placeholder
            modalDownloadButton.style.display = 'inline-block';
            modalDownloadButton.href = book.url_pdf;
        }

        bookDetailModal.show();
    }

    loadBooks(); // Cargar los libros al iniciar la página
});