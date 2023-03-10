import Movie from './Movie';

export default async function Home() {
	const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
	const res = await data.json();
	// console.log(res);

	return (
		<main>
			<div className='grid gap-16 grid-cols-fluid'>
				{res.results.map((movie: movieInterface) => (
					<Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
				))}
			</div>
		</main>
	);

	interface movieInterface {
		adult: boolean;
		backdrop_path: string;
		genre_ids: [Array<number>];
		id: number;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: string;
		poster_path: string;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
	}
}
