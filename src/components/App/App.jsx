import IllustrationArticle from '../../assets/images/illustration-article.svg';
import Avatar from '../../assets/images/image-avatar.webp';

function App() {
  return (
    <main className="bg-yellow flex h-screen w-screen items-center justify-center">
      <article className="m-auto mx-6 flex max-w-[384px] flex-col gap-6 rounded-[20px] border border-black bg-white p-5 shadow-[8px_8px_0_0_black] transition-shadow duration-300 ease-out hover:shadow-[16px_16px_0_0_black]">
        <img
          src={IllustrationArticle}
          alt="Desing illustration"
          width={139}
          height={95}
          className="max-h-[200px] w-full rounded-[10px] object-cover"
        />
        <div className="flex flex-col gap-3">
          <div className="bg-yellow w-fit rounded-[4px] px-3 py-1 text-black">
            <p className="text-xs font-bold sm:text-sm">Learning</p>
          </div>
          <p className="text-xs font-medium sm:text-sm">
            Published <time dateTime="2023-12-21">21 Dec 2023</time>
          </p>

          <h1 className="hover:text-yellow cursor-pointer text-xl font-bold sm:text-2xl">
            HTML & CSS foundations
          </h1>
          <p className="text-grey text-sm font-medium sm:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="main avatar" className="h-8 rounded-full" />
          <p className="text-sm font-bold">Greg Hooper</p>
        </div>
      </article>
    </main>
  );
}

export default App;
