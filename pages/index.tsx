function Index({ variables }) {

    const tracks = [
        '*', 
        'TEASER', 
        'BESTIE', 
        'TATU', 
        'ГЕРОЙ (skit)', 
        'CCTV',
        'UGU',
        'SHEIKH',
        'Дор Блю',
        'GUF DISS',
        'B',
        'Вернуть Прошлое (Skit)',
        'BALANCE',
        'Ночь, Такси, Заметки',
        'я понял (skit)',
        'Eeee',
        'KATRINA',
        'LOCATION',
        '10 секунд тишины перед последним треком (skit)',
        'Вставал Падал'
    ];

    return (
        <>
            <style global jsx>{`
                body {
                    background-color: ${variables.mainColor};
                    color: ${variables.secondaryColor};
                }
            `}</style>
            <div id='content'>
                <h1>MORGENSHTERN</h1>
                <h2>ПОСЛЕДНИЙ АЛЬБОМ - <span>LAST ONE</span></h2>
                <h3>СЛУШАТЬ НА ВСЕХ ПЛОЩАДКАХ!</h3>
                <a href='https://www.youtube.com/c/mmdcrew/videos' target='_blank'>
                    <div id='card' style={{ background: variables.secondaryColor, color: variables.mainColor }}>
                        <span style={{ background: variables.mainColor }}>
                            <svg width='40' height='40' fill={variables.secondaryColor} viewBox='0 0 24 24'>
                                <path d='m16.315 13.316-7.635 4.43c-.648.376-1.48-.079-1.48-.836V8.05c0-.757.83-1.213 1.48-.836l7.635 4.43a.963.963 0 0 1 0 1.672Z'></path>
                            </svg>
                        </span>
                        <p>MORGENSHTERN - LAST ONE</p>
                    </div>
                </a>
                <a href='https://open.spotify.com/album/3Mp2TOTZpTGvU1cExaHs7w' target='_blank'>
                    <div id='platform'>
                        <span>
                            <svg width='75' height='75' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.586 14.422a.622.622 0 0 1-.857.207c-2.349-1.434-5.304-1.759-8.785-.963a.623.623 0 1 1-.278-1.216c3.81-.87 7.078-.496 9.713 1.115a.625.625 0 0 1 .207.857ZM17.81 13.7a.78.78 0 0 1-1.072.256c-2.688-1.651-6.785-2.13-9.965-1.165A.781.781 0 0 1 6.32 11.3c3.631-1.101 8.146-.568 11.232 1.329a.78.78 0 0 1 .258 1.072Zm.105-2.835C14.693 8.95 9.375 8.774 6.298 9.707a.935.935 0 1 1-.543-1.79c3.531-1.07 9.404-.864 13.115 1.338a.936.936 0 0 1-.955 1.61Z'></path>
                            </svg>
                        </span>
                        <div>
                            <span>Альбом на Spotify</span>
                            <p>MORGENSHTERN - LastOne</p>
                        </div>
                    </div>
                </a>
                <a href='https://music.youtube.com/playlist?list=OLAK5uy_nYgJ15EvtkZYB4dHnptZh3V_a1PN-H6nY&feature=share&src=Linkfire&lId=f0e63a0f-d04e-44cd-a35b-dab0b0c782bc&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751' target='_blank'>
                    <div id='platform'>
                        <span>
                            <svg width='75' height='75' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12.062 5.28h.106c.987.003 5.985.039 7.332.401a2.411 2.411 0 0 1 1.698 1.704c.122.456.207 1.06.264 1.683l.012.125.027.312.01.124a38.66 38.66 0 0 1 .088 2.349v.09a38.42 38.42 0 0 1-.098 2.472l-.01.126-.01.124c-.06.687-.15 1.369-.283 1.87a2.407 2.407 0 0 1-1.698 1.704c-1.392.374-6.682.4-7.416.402h-.17c-.37 0-1.904-.007-3.512-.062l-.204-.008-.105-.004-.205-.009-.205-.008c-1.332-.059-2.6-.154-3.185-.312A2.408 2.408 0 0 1 2.8 16.66c-.133-.5-.222-1.183-.282-1.87l-.01-.125-.01-.125a37.683 37.683 0 0 1-.098-2.443v-.148c.003-.258.012-1.15.077-2.134l.009-.123.003-.063.01-.124.026-.313.012-.124c.058-.623.143-1.228.264-1.683A2.408 2.408 0 0 1 4.5 5.681c.585-.156 1.853-.252 3.185-.312l.204-.008.206-.007.104-.004.205-.008c1.142-.037 2.284-.057 3.427-.061h.232v-.002ZM10.08 9.13v5.782l4.989-2.89L10.08 9.13Z'></path>
                            </svg>
                        </span>
                        <div>
                            <span>Альбом на YouTube Music</span>
                            <p>MORGENSHTERN - LastOne</p>
                        </div>
                    </div>
                </a>
                <a href='https://music.apple.com/ru/album/1650439221?app=music&at=1l3vpUI&ct=LFV_4c93d10773e9062b8d1e18bb942a832a&itscg=30440&itsct=catchall_p6&lId=26684860&cId=none&sr=6&src=Linkfire&ls=1' target='_blank'>
                    <div id='platform'>
                        <span>
                            <svg width='75' height='75' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M16.298 2.41c-.04-.046-1.51.018-2.79 1.406s-1.082 2.979-1.054 3.02c.03.04 1.824.104 2.97-1.51 1.146-1.614.915-2.87.874-2.916Zm3.977 14.08c-.058-.116-2.79-1.481-2.536-4.107.255-2.627 2.01-3.347 2.038-3.425.027-.078-.717-.948-1.505-1.388a4.43 4.43 0 0 0-1.876-.52c-.13-.004-.58-.115-1.504.138-.61.167-1.984.707-2.362.729-.38.021-1.507-.627-2.72-.798-.777-.15-1.6.157-2.19.393-.587.236-1.706.905-2.488 2.685-.782 1.778-.373 4.596-.08 5.472.292.875.75 2.309 1.527 3.355.691 1.18 1.608 2 1.991 2.279.383.278 1.463.463 2.212.08.602-.37 1.69-.582 2.119-.566.428.015 1.273.185 2.138.647.685.236 1.333.138 1.982-.126.65-.266 1.59-1.271 2.686-3.31.417-.948.606-1.46.568-1.538Z'></path>
                                <path d='M16.298 2.41c-.04-.046-1.51.018-2.79 1.406s-1.082 2.979-1.054 3.02c.03.04 1.824.104 2.97-1.51 1.146-1.614.915-2.87.874-2.916Zm3.977 14.08c-.058-.116-2.79-1.481-2.536-4.107.255-2.627 2.01-3.347 2.038-3.425.027-.078-.717-.948-1.505-1.388a4.43 4.43 0 0 0-1.876-.52c-.13-.004-.58-.115-1.504.138-.61.167-1.984.707-2.362.729-.38.021-1.507-.627-2.72-.798-.777-.15-1.6.157-2.19.393-.587.236-1.706.905-2.488 2.685-.782 1.778-.373 4.596-.08 5.472.292.875.75 2.309 1.527 3.355.691 1.18 1.608 2 1.991 2.279.383.278 1.463.463 2.212.08.602-.37 1.69-.582 2.119-.566.428.015 1.273.185 2.138.647.685.236 1.333.138 1.982-.126.65-.266 1.59-1.271 2.686-3.31.417-.948.606-1.46.568-1.538Z'></path>
                            </svg>
                        </span>
                        <div>
                            <span>Альбом на Apple Music</span>
                            <p>MORGENSHTERN - LastOne</p>
                        </div>
                    </div>
                </a>
                <section>
                    <h2>Треки:</h2>
                    {tracks.map((track, i) => 
                        <p key={i}>{i + 1}. {track}</p>
                    )}
                </section>
            </div>
        </>
    )
}
  
export default Index;
