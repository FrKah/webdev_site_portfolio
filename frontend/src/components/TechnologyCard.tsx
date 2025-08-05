type TechnologyCardProps = {
  iconClass: string;
  name: string;
};

const TechnologyCard = ({ iconClass, name }: TechnologyCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center border border-base-300 w-24 h-24 rounded-2xl bg-base-200 shadow-md hover:scale-105 transition-transform duration-200">
      <i className={`text-5xl ${iconClass}`}></i>
      <span className="w-full text-xs mt-1">{name}</span>
    </div>
  );
};
export default TechnologyCard;
