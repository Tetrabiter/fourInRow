// components/GeometricBackground.tsx
export const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Анимированные геометрические фигуры */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-slower"></div>
      
      {/* Геометрические формы */}
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl rotate-45 animate-float-slower shadow-2xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-2xl rotate-12 animate-float-medium shadow-xl"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg rotate-45 animate-pulse-slow shadow-lg"></div>
      
      {/* Треугольники и шестиугольники */}
      <div className="absolute top-10 left-1/3 w-40 h-40">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/15 to-transparent clip-path-triangle animate-float-slower"></div>
      </div>
      
      <div className="absolute bottom-32 right-20 w-28 h-24">
        <div className="w-full h-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 clip-path-hexagon animate-pulse-medium"></div>
      </div>
    </div>
  );
};