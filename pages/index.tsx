import Image from 'next/image';
import spotify from '../public/images/spotify.png';

function Index({ variables }) {
    return (
        <>
            <style global jsx>{`
                body {
                    background-color: ${variables.mainColor};
                    color: ${variables.secondaryColor};
                }
            `}</style>
            <h1>MORGENSHTERN</h1>
            <h2>НОВЫЙ АЛЬБОМ - LAST ONE</h2>
            <h3>СЛУШАТЬ НА ВСЕХ ПЛОЩАДКАХ!</h3>
            <div id='card' style={{ background: variables.secondaryColor, color: variables.mainColor }}>
                <span style={{ background: variables.mainColor }}></span>
                <p>MORGENSHTERN - LAST ONE</p>
            </div>
            <div id='platform'>
                <span><Image src={spotify} width={50} height={50} /></span>
                <div>
                    <span>Новый Альбом на Spotify</span>
                    <p>MORGENSHTERN - LastOne</p>
                </div>
            </div>
        </>
    )
}
  
export default Index;