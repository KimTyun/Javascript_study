const url = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1'
const options = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization:
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjUwNmY1YTEyMjhhM2NkZTI2NWEzNmVhMDUyMDg2ZCIsIm5iZiI6MTc0ODM5Mzk2Ni42MSwic3ViIjoiNjgzNjVmZWVlOGJiZDdjMGQ2ZWIzY2FmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OWmIjNieuEOZekQmYUuWPXuKgbZmZbNGGxO3YQSEsCg',
   },
}
const getPlayingMoveis = async (url) => {
   try {
      const res = await fetch(url, options)
      // console.log(res)
      const data = await res.json()
      const results = data.results
      console.log(results)
      const container = document.querySelector('main .container')
      let rowsHtml = '' // 모든 row를 담을 변수
      for (let i = 0; i < results.length; i += 4) {
         let rowHtml = '<div class="row">'
         for (let j = 0; j < 4; j++) {
            const index = i + j
            const movie = results[index]

            rowHtml += `
                    <div class="col-sm-3 mb-3">
                        <div class="card" style="width: 18rem">
                            <a href="#"><img src="https://image.tmdb.org/t/p/w500/${results[index].poster_path}" class="card-img-top poster" alt="poster" /></a>
                            <div class="card-body">
                                <p class="card-text title">${results[index].title}</p>
                                <p class="card-text average">${results[index].vote_average}</p>
                            </div>
                        </div>
                    </div>`
         }
         rowHtml += '</div>'
         rowsHtml += rowHtml
      }
      container.innerHTML = rowsHtml
   } catch (error) {
      console.error(error.message)
   }
}
getPlayingMoveis(url)
