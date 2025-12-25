
import { Hono } from 'hono';
import { createRequest } from './adapter';

const app = new Hono();

// Helper for cookie parsing
const parseCookie = (str) => {
    if (!str) return {};
    return str.split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            if (v.length < 2) return acc;
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {});
};

// --- Modules Imports ---
import mod_0 from '../module/ai_recommend.js';
import mod_1 from '../module/album.js';
import mod_2 from '../module/album_detail.js';
import mod_3 from '../module/album_shop.js';
import mod_4 from '../module/album_songs.js';
import mod_5 from '../module/artist_albums.js';
import mod_6 from '../module/artist_audios.js';
import mod_7 from '../module/artist_detail.js';
import mod_8 from '../module/artist_follow.js';
import mod_9 from '../module/artist_follow_newsongs.js';
import mod_10 from '../module/artist_honour.js';
import mod_11 from '../module/artist_lists.js';
import mod_12 from '../module/artist_unfollow.js';
import mod_13 from '../module/artist_videos.js';
import mod_14 from '../module/audio.js';
import mod_15 from '../module/audio_accompany_matching.js';
import mod_16 from '../module/audio_ktv_total.js';
import mod_17 from '../module/audio_related.js';
import mod_18 from '../module/brush.js';
import mod_19 from '../module/captcha_sent.js';
import mod_20 from '../module/comment_album.js';
import mod_21 from '../module/comment_count.js';
import mod_22 from '../module/comment_floor.js';
import mod_23 from '../module/comment_music.js';
import mod_24 from '../module/comment_music_classify.js';
import mod_25 from '../module/comment_music_hotword.js';
import mod_26 from '../module/comment_playlist.js';
import mod_27 from '../module/everyday_friend.js';
import mod_28 from '../module/everyday_history.js';
import mod_29 from '../module/everyday_recommend.js';
import mod_30 from '../module/everyday_style_recommend.js';
import mod_31 from '../module/favorite_count.js';
import mod_32 from '../module/fm_class.js';
import mod_33 from '../module/fm_image.js';
import mod_34 from '../module/fm_recommend.js';
import mod_35 from '../module/fm_songs.js';
import mod_36 from '../module/images.js';
import mod_37 from '../module/images_audio.js';
import mod_38 from '../module/ip.js';
import mod_39 from '../module/ip_dateil.js';
import mod_40 from '../module/ip_playlist.js';
import mod_41 from '../module/ip_zone.js';
import mod_42 from '../module/ip_zone_home.js';
import mod_43 from '../module/kmr_audio_mv.js';
import mod_44 from '../module/krm_audio.js';
import mod_45 from '../module/lastest_songs_listen.js';
import mod_46 from '../module/login.js';
import mod_47 from '../module/login_cellphone.js';
import mod_48 from '../module/login_openplat.js';
import mod_49 from '../module/login_qr_check.js';
import mod_50 from '../module/login_qr_create.js';
import mod_51 from '../module/login_qr_key.js';
import mod_52 from '../module/login_token.js';
import mod_53 from '../module/login_wx_check.js';
import mod_54 from '../module/login_wx_create.js';
import mod_55 from '../module/longaudio_album_audios.js';
import mod_56 from '../module/longaudio_album_detail.js';
import mod_57 from '../module/longaudio_daily_recommend.js';
import mod_58 from '../module/longaudio_rank_recommend.js';
import mod_59 from '../module/longaudio_vip_recommend.js';
import mod_60 from '../module/longaudio_week_recommend.js';
import mod_61 from '../module/lyric.js';
import mod_62 from '../module/pc_diantai.js';
import mod_63 from '../module/personal_fm.js';
import mod_64 from '../module/playhistory_upload.js';
import mod_65 from '../module/playlist_add.js';
import mod_66 from '../module/playlist_del.js';
import mod_67 from '../module/playlist_detail.js';
import mod_68 from '../module/playlist_effect.js';
import mod_69 from '../module/playlist_similar.js';
import mod_70 from '../module/playlist_tags.js';
import mod_71 from '../module/playlist_tracks_add.js';
import mod_72 from '../module/playlist_tracks_del.js';
import mod_73 from '../module/playlist_track_all.js';
import mod_74 from '../module/playlist_track_all_new.js';
import mod_75 from '../module/privilege_lite.js';
import mod_76 from '../module/rank_audio.js';
import mod_77 from '../module/rank_info.js';
import mod_78 from '../module/rank_list.js';
import mod_79 from '../module/rank_top.js';
import mod_80 from '../module/rank_vol.js';
import mod_81 from '../module/recommend_songs.js';
import mod_82 from '../module/register_dev.js';
import mod_83 from '../module/scene_audio_list.js';
import mod_84 from '../module/scene_collection_list.js';
import mod_85 from '../module/scene_lists.js';
import mod_86 from '../module/scene_lists_v2.js';
import mod_87 from '../module/scene_module.js';
import mod_88 from '../module/scene_module_info.js';
import mod_89 from '../module/scene_music.js';
import mod_90 from '../module/scene_video_list.js';
import mod_91 from '../module/search.js';
import mod_92 from '../module/search_complex.js';
import mod_93 from '../module/search_default.js';
import mod_94 from '../module/search_hot.js';
import mod_95 from '../module/search_lyric.js';
import mod_96 from '../module/search_mixed.js';
import mod_97 from '../module/search_suggest.js';
import mod_98 from '../module/server_now.js';
import mod_99 from '../module/sheet_collection.js';
import mod_100 from '../module/sheet_collection_detail.js';
import mod_101 from '../module/sheet_detail.js';
import mod_102 from '../module/sheet_hot.js';
import mod_103 from '../module/sheet_list.js';
import mod_104 from '../module/singer_list.js';
import mod_105 from '../module/song_climax.js';
import mod_106 from '../module/song_ranking.js';
import mod_107 from '../module/song_ranking_filter.js';
import mod_108 from '../module/song_url.js';
import mod_109 from '../module/song_url_new.js';
import mod_110 from '../module/theme_music.js';
import mod_111 from '../module/theme_music_detail.js';
import mod_112 from '../module/theme_playlist.js';
import mod_113 from '../module/theme_playlist_track.js';
import mod_114 from '../module/top_album.js';
import mod_115 from '../module/top_card.js';
import mod_116 from '../module/top_card_youth.js';
import mod_117 from '../module/top_ip.js';
import mod_118 from '../module/top_playlist.js';
import mod_119 from '../module/top_song.js';
import mod_120 from '../module/user_cloud.js';
import mod_121 from '../module/user_cloud_url.js';
import mod_122 from '../module/user_detail.js';
import mod_123 from '../module/user_follow.js';
import mod_124 from '../module/user_history.js';
import mod_125 from '../module/user_listen.js';
import mod_126 from '../module/user_playlist.js';
import mod_127 from '../module/user_video_collect.js';
import mod_128 from '../module/user_video_love.js';
import mod_129 from '../module/user_vip_detail.js';
import mod_130 from '../module/video_detail.js';
import mod_131 from '../module/video_privilege.js';
import mod_132 from '../module/video_url.js';
import mod_133 from '../module/youth_channel_all.js';
import mod_134 from '../module/youth_channel_amway.js';
import mod_135 from '../module/youth_channel_detail.js';
import mod_136 from '../module/youth_channel_similar.js';
import mod_137 from '../module/youth_channel_song.js';
import mod_138 from '../module/youth_channel_song_detail.js';
import mod_139 from '../module/youth_channel_sub.js';
import mod_140 from '../module/youth_day_vip.js';
import mod_141 from '../module/youth_day_vip_upgrade.js';
import mod_142 from '../module/youth_dynamic.js';
import mod_143 from '../module/youth_dynamic_recent.js';
import mod_144 from '../module/youth_listen_song.js';
import mod_145 from '../module/youth_month_vip_record.js';
import mod_146 from '../module/youth_union_vip.js';
import mod_147 from '../module/youth_user_song.js';
import mod_148 from '../module/youth_vip.js';
import mod_149 from '../module/yueku.js';
import mod_150 from '../module/yueku_banner.js';
import mod_151 from '../module/yueku_fm.js';

// --- Routes ---

app.all('/ai_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_0(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/album', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_1(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/album_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_2(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/album_shop', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_3(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/album_songs', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_4(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_albums', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_5(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_audios', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_6(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_7(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_follow', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_8(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_follow_newsongs', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_9(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_honour', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_10(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_lists', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_11(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_unfollow', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_12(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/artist_videos', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_13(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/audio', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_14(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/audio_accompany_matching', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_15(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/audio_ktv_total', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_16(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/audio_related', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_17(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/brush', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_18(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/captcha_sent', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_19(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_album', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_20(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_count', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_21(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_floor', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_22(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_music', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_23(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_music_classify', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_24(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_music_hotword', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_25(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/comment_playlist', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_26(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/everyday_friend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_27(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/everyday_history', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_28(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/everyday_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_29(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/everyday_style_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_30(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/favorite_count', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_31(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/fm_class', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_32(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/fm_image', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_33(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/fm_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_34(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/fm_songs', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_35(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/images', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_36(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/images_audio', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_37(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/ip', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_38(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/ip_dateil', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_39(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/ip_playlist', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_40(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/ip_zone', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_41(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/ip_zone_home', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_42(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/kmr_audio_mv', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_43(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/krm_audio', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_44(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/lastest_songs_listen', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_45(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_46(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_cellphone', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_47(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_openplat', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_48(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_qr_check', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_49(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_qr_create', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_50(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_qr_key', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_51(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_token', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_52(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_wx_check', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_53(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/login_wx_create', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_54(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/longaudio_album_audios', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_55(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/longaudio_album_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_56(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/longaudio_daily_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_57(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/longaudio_rank_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_58(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/longaudio_vip_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_59(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/longaudio_week_recommend', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_60(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/lyric', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_61(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/pc_diantai', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_62(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/personal_fm', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_63(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playhistory_upload', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_64(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_add', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_65(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_del', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_66(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_67(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_effect', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_68(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_similar', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_69(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_tags', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_70(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_tracks_add', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_71(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_tracks_del', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_72(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_track_all', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_73(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/playlist_track_all_new', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_74(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/privilege_lite', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_75(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/rank_audio', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_76(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/rank_info', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_77(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/rank_list', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_78(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/rank_top', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_79(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/rank_vol', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_80(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/recommend_songs', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_81(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/register_dev', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_82(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_audio_list', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_83(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_collection_list', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_84(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_lists', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_85(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_lists_v2', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_86(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_module', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_87(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_module_info', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_88(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_music', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_89(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/scene_video_list', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_90(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_91(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search_complex', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_92(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search_default', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_93(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search_hot', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_94(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search_lyric', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_95(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search_mixed', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_96(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/search_suggest', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_97(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/server_now', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_98(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/sheet_collection', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_99(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/sheet_collection_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_100(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/sheet_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_101(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/sheet_hot', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_102(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/sheet_list', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_103(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/singer_list', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_104(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/song_climax', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_105(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/song_ranking', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_106(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/song_ranking_filter', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_107(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/song_url', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_108(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/song_url_new', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_109(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/theme_music', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_110(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/theme_music_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_111(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/theme_playlist', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_112(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/theme_playlist_track', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_113(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/top_album', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_114(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/top_card', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_115(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/top_card_youth', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_116(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/top_ip', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_117(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/top_playlist', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_118(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/top_song', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_119(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_cloud', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_120(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_cloud_url', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_121(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_122(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_follow', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_123(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_history', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_124(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_listen', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_125(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_playlist', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_126(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_video_collect', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_127(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_video_love', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_128(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/user_vip_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_129(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/video_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_130(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/video_privilege', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_131(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/video_url', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_132(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_all', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_133(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_amway', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_134(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_135(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_similar', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_136(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_song', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_137(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_song_detail', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_138(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_channel_sub', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_139(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_day_vip', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_140(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_day_vip_upgrade', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_141(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_dynamic', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_142(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_dynamic_recent', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_143(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_listen_song', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_144(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_month_vip_record', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_145(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_union_vip', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_146(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_user_song', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_147(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/youth_vip', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_148(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/yueku', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_149(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/yueku_banner', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_150(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

app.all('/yueku_fm', async (c) => {
    const query = c.req.query();
    
    let body = {};
    if (c.req.method !== 'GET') {
        try {
             // Try to parse body. Support json and form
             const contentType = c.req.header('Content-Type') || '';
             if (contentType.includes('application/json')) {
                 body = await c.req.json();
             } else if (contentType.includes('form') || contentType.includes('multipart')) {
                 body = await c.req.parseBody();
             }
        } catch (e) {}
    }

    const params = { ...query, ...body };
    
    // Cookie handling
    const cookieHeader = c.req.header('Cookie');
    if (cookieHeader) {
        params.cookie = parseCookie(cookieHeader);
    } else {
        params.cookie = {};
    }

    try {
        const result = await mod_151(params, createRequest);
        
        // Handle cookies from result
        if (result.cookie && Array.isArray(result.cookie)) {
            result.cookie.forEach(cStr => {
                 c.header('Set-Cookie', cStr, { append: true });
            });
        }
        
        return c.json(result.body, result.status);
    } catch (error) {
         return c.json(error.body || { msg: error.message }, error.status || 500);
    }
});

export default app;
