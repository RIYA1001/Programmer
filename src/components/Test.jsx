import { Link } from 'react-router-dom';

const Test = () => {

  return (
    <div className="container mx-auto my-40 p-2">
      <div className="grid grid-cols-2">

        <div className="flex flex-row">
          <h2 className="text-2xl font-bold">TOP Categories</h2>
        </div>
        <div className="flex flex-row-reverse">

          <button
            className="text-sm bg-gray-300 font-bold py-2 px-4 rounded-3xl"
          >
            View all
          </button>

        </div>
      </div>
      <br />
      <br />

      <div className="text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-11">

        <Link to="/mcq" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\java.png' alt='Java' />
            Java
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\python.png' alt='Python' />
            Python
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\c.png' alt='C' />
            C
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\c-plus2.png' alt='C++' />
            C++
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\c-hash.png' alt='C#' />
            C#
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\js.png' alt='JavaScript' />
            JavaScript
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\net.png' alt='.Net' />
            .Net
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\php.png' alt='PHP' />
            PHP
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\dart.png' alt='Dart' />
            Dart
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\swift.png' alt='Swift' />
            Swift
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\sql.png' alt='SQL' />
            SQL
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\kotlin.png' alt='Kotlin' />
            Kotlin
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\html.png' alt='HTML' />
            HTML
          </section>
        </Link>

        <Link to="/" className="text-gray-900 font-bold m-4 rounded mb-3">
          <section className="bg-yellow-400 hover:bg-gray-900 hover:text-yellow-400 p-6 rounded-lg shadow-md">
            <img className="mx-auto mb-5 h-20 w-auto" src='src\assets\icon\css.png' alt='Css' />
            Css
          </section>
        </Link>

      </div>

    </div>

  );

}

export default Test