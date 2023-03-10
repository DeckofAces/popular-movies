import Link from 'next/link';
import Image from 'next/image';

interface movieInterface {
	adult?: boolean;
	backdrop_path?: string;
	genre_ids?: [Array<number>];
	id: number;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: string;
	poster_path: string;
	release_date: string;
	title: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}

export default function Movie({ id, title, poster_path, release_date }: movieInterface) {
	const imagePath = 'https://image.tmdb.org/t/p/original';

	return (
		<div>
			<h1>{title}</h1>
			<h2>{release_date}</h2>
			<Link href={`/${id}`}>
				<Image src={imagePath + poster_path} width={500} height={500} alt={``} />
			</Link>
		</div>
	);
}
