import Image from 'next/image';

export async function getStaticProps() {
	const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
	const res = await data.json();

	return {
		props: {
			res,
		},
	};
}

export default async function MovieDetail({ params }: { params: paramsType }) {
	const { movie } = params;

	const imagePath = 'https://image.tmdb.org/t/p/original';
	const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
	const res = await data.json();

	return (
		<div>
			<div>
				<h2 className='text-2xl'>{res.title}</h2>
				<h2 className='text-lg'>{res.release_date}</h2>
				<h2>Runtime: {res.runtime} minutes</h2>
				<h2 className='my-2 inline-block rounded-lg bg-green-600 py-2 px-4 text-sm'>{res.status}</h2>
				<Image className='my-12 w-full' src={imagePath + res.backdrop_path} width={1000} height={1000} alt={res.title} priority />
				<p>{res.overview}</p>
			</div>
		</div>
	);
}

type paramsType = {
	movie: string;
};

interface movieInterface {
	adult?: boolean;
	backdrop_path?: string;
	genre_ids?: [Array<number>];
	id?: number;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: string;
	poster_path?: string;
	release_date?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}
