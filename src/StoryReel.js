import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://cdn.bulbagarden.net/upload/a/a7/PSMD_poster.png"
                profileSrc="https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png"
                title="Pikachu"
            />
            <Story 
                image="https://www.suiteexperiencegroup.com/wp-content/themes/responsive/images/trail-blazers-executive-suite-view-corner-location-1_960.jpg"
                profileSrc="https://cdn.vox-cdn.com/thumbor/bezVrxd0pVkU6u-ljbbT9nHsbL4=/0x0:2000x1233/1200x800/filters:focal(780x63:1100x383)/cdn.vox-cdn.com/uploads/chorus_image/image/66249489/lillian_1.0.jpg"
                title="Lillard"
            />
            <Story
                image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
                title="Marvel"
            />
            <Story
                image="https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/COD-Mobile-BR-01.jpg"
                profileSrc="https://cnet1.cbsistatic.com/img/l8RbnOsHzo6C0fHx-A7yGCDZxGI=/1200x675/2019/09/18/c07d7cfa-5cc7-4d64-a3bb-aabf6b778dcc/call-of-duty-mobile.jpg"
                title="Call of Duty"
            />
            <Story
                image="https://cdn.mos.cms.futurecdn.net/ojsvrqhnYFHNRDrfQLJTVD.jpg"
                profileSrc="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/NVIDIA_GeForce_NOW.jpg"
                title="Nnidia GeForce"
            />

        </div>
    )
}

export default StoryReel
      