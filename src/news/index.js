import React from 'react';
import SectionContainer from '../shared/sections/container';
import SectionCard from '../shared/sections/card';

function News() {
    return (
        <SectionContainer title="NOTICIAS">
            <SectionCard
                cover="https://federaciondecafeteros.org/app/uploads/2020/07/Tapabocas-575x334.jpg"
                title="Foro Mundial de Productores de Café resalta trabajo conjunto para hacer frente a covid-19"
                date="julio 29, 2020"
                description="Con más de mil participantes de diferentes países."
                url="https://federaciondecafeteros.org/wp/listado-noticias/foro-mundial-de-productores-de-cafe-resalta-trabajo-conjunto-para-hacer-frente-a-covid-19/"
            />
        </SectionContainer>
    );
}

export default News;