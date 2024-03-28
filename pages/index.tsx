// pages/index.tsx
import axios from 'axios'; // Import Axios
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Footer from '../components/Footer';
import WatchNext from '@/components/WatchNext';
import PopularDirectors from '@/components/PopularDirectors';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

interface PopularMovie extends Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}



interface Props {
  popularMovies: PopularMovie[];
}

const IndexPage: React.FC<Props> = ({ popularMovies }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Title>Welcome to My Movie App</Title>
      <SubTitle>
      <div className="grid grid-cols-3 gap-4">
  {popularMovies.map((movie: Movie) => (
    <div key={movie.id} className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="w-40 h-auto"
      />
      <h2 className="text-lg font-bold text-center mt-2">{movie.title}</h2>
    </div>
  ))}
</div>
      </SubTitle>
      <WatchNext>
      <section className="bg-gray-200 p-6 rounded-lg shadow-md mb-8">
  <h2 className="text-lg font-semibold">Deciding What To Watch Next?</h2>
  <p>You are in the right place, tell us which title and genre you'd like to watch at the moment.</p>
</section>
      </WatchNext>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  // Fetch popular movies
  const apiKey = '7f9da51b4460575a76606680472ef4d5'; // Replace 'YOUR_API_KEY' with your actual TMDb API key
  const popularMoviesResponse = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  const popularMovies = popularMoviesResponse.data.results;

  console.log(popularMoviesResponse.data);

  return {
    props: {
      popularMovies,
    },
  };
}

export default IndexPage;