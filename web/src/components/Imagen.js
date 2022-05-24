const Imagen = ({ item }) => {
    console.log(item);
    return (
        <div class="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <img
                        className="h-40 w-30 rounded-t-lg"
                        src={item.img} alt=""
                    />
                </a>
                <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Imagen;