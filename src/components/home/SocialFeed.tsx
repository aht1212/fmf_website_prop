import React from 'react';
import { MessageCircle, Heart, Share, ExternalLink } from 'lucide-react';

const SocialFeed = () => {
  const socialPosts = [
    {
      id: 1,
      platform: 'Twitter',
      platformColor: 'bg-blue-400',
      author: 'FMF Officiel',
      handle: '@fmf_officiel',
      time: '2h',
      content: '🦅 Bravo aux Aigles du Mali pour cette magnifique victoire 2-1 contre le Sénégal ! Le football malien rayonne ! 🇲🇱 #AlleznLesAigles #Mali',
      likes: 1247,
      retweets: 89,
      replies: 156
    },
    {
      id: 2,
      platform: 'Facebook',
      platformColor: 'bg-blue-600',
      author: 'Fédération Malienne de Football',
      time: '4h',
      content: 'Les billets pour le match Mali vs Côte d\'Ivoire du 25 novembre sont maintenant disponibles ! Réservez dès maintenant sur notre site officiel.',
      likes: 892,
      comments: 67,
      shares: 134
    },
    {
      id: 3,
      platform: 'Instagram',
      platformColor: 'bg-pink-600',
      author: 'fmf_officiel',
      time: '6h',
      content: '📸 Les plus belles images de l\'entraînement des Aigles aujourd\'hui ! L\'équipe se prépare intensément pour le prochain match. 💪',
      likes: 2156,
      comments: 98
    }
  ];

  return (
    <section className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Réseaux sociaux</h3>
        <button className="text-mali-green hover:text-mali-green/80 font-semibold text-sm">
          Voir plus
        </button>
      </div>

      <div className="space-y-4">
        {socialPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-mali-green/50 transition-all duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 ${post.platformColor} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {post.platform[0]}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      {post.author}
                    </div>
                    {post.handle && (
                      <div className="text-xs text-gray-500">{post.handle}</div>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    {post.time}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </div>
                
                <p className="text-sm text-gray-800 leading-relaxed mb-3">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    {post.platform === 'Twitter' && post.retweets && (
                      <div className="flex items-center space-x-1">
                        <Share className="w-4 h-4" />
                        <span>{post.retweets}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies || post.comments}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 ${post.platformColor} text-white rounded-full text-xs`}>
                    {post.platform}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="w-full py-2 text-mali-green hover:bg-mali-green hover:text-white border border-mali-green rounded-lg transition-all duration-200 text-sm font-medium">
          Suivre @fmf_officiel
        </button>
      </div>
    </section>
  );
};

export default SocialFeed;