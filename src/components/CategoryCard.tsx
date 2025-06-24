interface CategoryCardProps {
  name: string;
  viewerCount: number;
  thumbnail: string;
}

const CategoryCard = ({ name, viewerCount, thumbnail }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-slate-800">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Category Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-300 text-sm">
            {viewerCount.toLocaleString()} зрителей
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
