import { 
  Play, Pause, VolumeX, Maximize2, Share2, Info, 
  CheckCircle2, AlertCircle, RefreshCw, Volume2, User, Clock, Zap, Music, Video, Download
} from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoInfo, VideoFormat, buildDownloadUrl, buildPreviewUrl } from '../services/videoExtractor';

interface VideoPreviewProps {
  video: VideoInfo;
}

export function VideoPreview({ video }: VideoPreviewProps) {
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'video' | 'audio'>('video');
  const [showMetadata, setShowMetadata] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatFileSize = (bytes: number) => {
    if (!bytes || bytes === 0) return 'Unknown';
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds: number) => {
    if (!seconds) return '00:00';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h > 0 ? h : null, m, s]
      .filter(x => x !== null)
      .map(x => x!.toString().padStart(2, '0'))
      .join(':');
  };

  const handleDownload = (format: VideoFormat | null, mode: 'video' | 'audio' | 'merged') => {
    if (!format || isDownloading) return;
    
    const downloadId = `${mode}_${format.formatId}`;
    setIsDownloading(downloadId);

    const downloadUrl = buildDownloadUrl(video, format, mode);
    
    const a = document.createElement('a');
    a.href = downloadUrl;
    // Set a random enough name by default
    const cleanTitle = (video.title || 'video').replace(/[^a-z0-9]/gi, '_').substring(0, 50);
    const extension = mode === 'audio' ? 'mp3' : 'mp4';
    a.setAttribute('download', `${cleanTitle}_${mode}.${extension}`);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      setIsDownloading(null);
    }, 5000); // Increased timeout for heavy merges
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const videoFormats = video.categories?.videoFormats || [];
  const audioFormats = video.categories?.audioFormats || [];

  const previewSource = buildPreviewUrl(video);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full space-y-8 pb-32"
    >
      {/* 🎬 Hero Live Player Section */}
      <div className="relative group overflow-hidden rounded-[32px] glass-card p-4 md:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 border-white/40">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          
          {/* 📺 Live Player */}
          <div className="w-full lg:w-[60%] shrink-0">
            <div className="relative bg-black aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 shadow-slate-900/50 group/player">
              <video 
                ref={videoRef}
                src={previewSource}
                poster={video.thumbnail}
                className="w-full h-full object-cover rounded-2xl"
                muted={isMuted}
                playsInline
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Custom Player Controls Overlays */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-2 group-hover/player:translate-y-0 opacity-0 group-hover/player:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="p-2.5 bg-emerald-600 rounded-full text-white hover:scale-110 active:scale-95 transition-all">
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-white/80 hover:text-white transition-colors">
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-emerald-400 px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 uppercase tracking-widest">Live Preview</span>
                    <button className="p-2 text-white/50 hover:text-white transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {!isPlaying && (
                <button 
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/player:bg-black/40 transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-emerald-500/50 shadow-2xl transform active:scale-90 transition-transform">
                    <Play className="w-10 h-10 ml-1 fill-current" />
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* 🏷️ Info Pane */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-emerald-600 text-white text-[11px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-emerald-600/20">
                  {video.platform}
                </span>
                <span className="px-3 py-1 bg-white border border-slate-100 text-slate-500 text-[11px] font-black rounded-lg uppercase tracking-widest flex items-center gap-1.5">
                   <Clock className="w-3 h-3 text-emerald-500" />
                   {formatDuration(video.duration)}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight line-clamp-3">
                {video.title}
              </h1>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-1">
                   <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Author</p>
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                         <User className="w-3 h-3 text-slate-500" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{video.author}</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 lg:pt-0">
               <button 
                 onClick={() => setShowMetadata(!showMetadata)}
                 className={`flex-1 px-6 py-3.5 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 active:scale-95 ${showMetadata ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
               >
                 <Info className="w-4 h-4" />
                 DETAILS
               </button>
            </div>
          </div>
        </div>

        {/* 📚 Metadata Grid (Expansion) */}
        <AnimatePresence>
          {showMetadata && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-8"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div className="space-y-1">
                   <span className="text-[10px] font-black text-slate-400 uppercase">File Type</span>
                   <p className="font-black text-slate-700">Digital Media</p>
                </div>
                <div className="space-y-1">
                   <span className="text-[10px] font-black text-slate-400 uppercase">Provider</span>
                   <p className="font-black text-slate-700">{video.platform}</p>
                </div>
                <div className="space-y-1">
                   <span className="text-[10px] font-black text-slate-400 uppercase">Extractor</span>
                   <p className="font-black text-slate-700">VideoGrab PRO</p>
                </div>
                <div className="space-y-1 text-emerald-600">
                   <span className="text-[10px] font-black text-emerald-400 uppercase">Status</span>
                   <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <p className="font-black">Verified Stream</p>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 📥 Downloads Manager Section */}
      <div className="space-y-6">
          <div className="flex items-center justify-between px-4">
             <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Zap className="w-6 h-6 text-emerald-600" />
                  Format Selector
                </h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pick your quality & format</p>
             </div>
             
             {/* Tabs Toggle */}
             <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-100">
                <button 
                  onClick={() => setActiveTab('video')}
                  className={`px-6 py-2 rounded-lg text-xs font-black transition-all ${activeTab === 'video' ? 'bg-white text-emerald-600 shadow-sm shadow-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  VIDEO
                </button>
                <button 
                  onClick={() => setActiveTab('audio')}
                  className={`px-6 py-2 rounded-lg text-xs font-black transition-all ${activeTab === 'audio' ? 'bg-white text-emerald-600 shadow-sm shadow-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  AUDIO
                </button>
             </div>
          </div>

          <AnimatePresence mode="wait">
             <motion.div 
               key={activeTab}
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.98 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             >
                {/* Main Format Loop */}
                {activeTab === 'video' && videoFormats.length === 0 && video.downloadUrl && (
                  <div 
                    className="relative group bg-white p-6 rounded-[24px] border border-emerald-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between ring-2 ring-emerald-400/20"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-lg transform rotate-[-3deg]">
                            <Zap className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PRO</p>
                            <h4 className="text-xl font-black text-slate-900 leading-none mt-1">High Quality</h4>
                         </div>
                      </div>
                      <p className="text-sm font-bold text-slate-500">Universal Direct Stream Detected</p>
                    </div>

                    <button 
                      disabled={!!isDownloading}
                      onClick={() => handleDownload({ formatId: 'universal', quality: 'High Quality', ext: 'mp4', url: video.downloadUrl } as any, 'video')}
                      className="w-full mt-4 py-3.5 px-4 rounded-xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg"
                    >
                       {isDownloading?.includes('universal') ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                       ) : (
                         <>
                           <Download className="w-4 h-4" />
                           Download Video
                         </>
                       )}
                    </button>
                  </div>
                )}

                {(activeTab === 'video' ? videoFormats : audioFormats).map((format, idx) => {
                  const isAudio = activeTab === 'audio';
                  const isBest = idx === 0;

                  return (
                    <div 
                      key={format.formatId}
                      className={`relative group bg-white p-6 rounded-[24px] border border-slate-100 shadow-md hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 flex flex-col justify-between ${isBest ? 'ring-2 ring-emerald-400/20' : ''}`}
                    >
                      {/* Floating Badge */}
                      {isBest && (
                        <div className="absolute top-4 right-4 animate-float">
                          <div className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg ${isAudio ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-50 text-emerald-600'}`}>
                             <Zap className="w-2.5 h-2.5" /> Best {activeTab}
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg ${isAudio ? 'bg-emerald-50 text-emerald-600 shadow-emerald-600/10' : 'bg-emerald-50 text-emerald-600 shadow-emerald-600/10'}`}>
                              {isAudio ? <Music className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                           </div>
                           <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                {format.ext.toUpperCase()} {!isAudio ? (format.hasAudio ? '+ AUDIO' : 'VIDEO ONLY') : 'HQ AUDIO'}
                              </p>
                              <h4 className="text-xl font-black text-slate-900 leading-none mt-1">{format.quality}</h4>
                           </div>
                        </div>

                        <div className="flex items-center gap-x-8 gap-y-2 flex-wrap pb-4">
                           <div className="space-y-0.5">
                              <span className="text-[9px] font-black text-slate-400 uppercase">Filesize</span>
                              <p className="text-sm font-bold text-slate-600">{formatFileSize(format.filesize)}</p>
                           </div>
                           {!isAudio && format.fps && (
                            <div className="space-y-0.5">
                                <span className="text-[9px] font-black text-slate-400 uppercase">Frame Rate</span>
                                <p className="text-sm font-bold text-slate-600">{format.fps} FPS</p>
                            </div>
                           )}
                           <div className="space-y-0.5">
                                <span className="text-[9px] font-black text-emerald-500 uppercase">Speed</span>
                                <div className="flex items-center gap-1">
                                   <Zap className="w-3 h-3 text-emerald-500" />
                                   <p className="text-sm font-bold text-emerald-600 uppercase tracking-tighter">Fast</p>
                                </div>
                            </div>
                        </div>
                      </div>

                      <div className="space-y-3 mt-4">
                        <button 
                          disabled={!!isDownloading}
                          onClick={() => handleDownload(format, isAudio ? 'audio' : 'video')}
                          className={`w-full py-3.5 px-4 rounded-xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 group/dl shadow-lg ${isAudio ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                        >
                           {isDownloading === `${isAudio ? 'audio' : 'video'}_${format.formatId}` ? (
                              <RefreshCw className="w-4 h-4 animate-spin" />
                           ) : (
                             <>
                               {isAudio ? <Music className="w-4 h-4 group-hover/dl:scale-110" /> : <Video className="w-4 h-4 group-hover/dl:scale-110" />}
                               Get {isAudio ? 'HQ Audio' : (format.hasAudio ? 'Video + Audio' : 'Video Only')}
                             </>
                           )}
                        </button>

                        {!isAudio && !format.hasAudio && (
                          <button 
                            disabled={!!isDownloading}
                            onClick={() => handleDownload(format, 'merged')}
                            className="w-full py-3.5 px-4 rounded-xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 group/dl shadow-lg bg-emerald-600 text-white hover:bg-emerald-700"
                          >
                             {isDownloading === `merged_${format.formatId}` ? (
                                <RefreshCw className="w-4 h-4 animate-spin" />
                             ) : (
                               <>
                                 <Download className="w-4 h-4 group-hover/dl:scale-110" />
                                 Download with Audio
                               </>
                             )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Empty State Fallback */}
                {((activeTab === 'video' ? videoFormats : audioFormats).length === 0 && !video.downloadUrl) && (
                   <div className="col-span-full py-20 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                         <AlertCircle className="w-8 h-8 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-black text-slate-800">No {activeTab} formats found</h3>
                      <p className="text-slate-500 font-medium">Try another link or check the platform status.</p>
                   </div>
                )}
             </motion.div>
          </AnimatePresence>
      </div>

      <div className="pt-20 text-center">
         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
               Encrypted Endpoint
               <span className="w-1 h-1 rounded-full bg-slate-300" />
               SSL Secured
               <span className="w-1 h-1 rounded-full bg-slate-300" />
               Virus Free
            </p>
         </div>
      </div>
    </motion.div>
  );
}
