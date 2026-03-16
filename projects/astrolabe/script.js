// Mobile warning dismissal
function dismissWarning() {
    document.getElementById('mobile-warning').style.display = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Speed control functionality
document.querySelectorAll('.speed-controls').forEach(controlGroup => {
    const buttons = controlGroup.querySelectorAll('.speed-btn');
    const section = controlGroup.closest('.gallery-section');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons in this group
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Get speed value
            const speed = parseFloat(this.getAttribute('data-speed'));

            // Apply speed to all videos in this section
            if (section) {
                const videos = section.querySelectorAll('video');
                videos.forEach(video => {
                    video.playbackRate = speed;
                });
            }
        });
    });
});

// Lazy loading for videos using IntersectionObserver
// Videos use data-src; the real src is set only when the video scrolls into view.
document.addEventListener('DOMContentLoaded', function() {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Swap data-src → src on first intersection
                if (!video.src && video.dataset.src) {
                    video.src = video.dataset.src;
                    video.load();
                }
                // Only play when video has buffered enough data
                if (video.paused) {
                    // Wait for canplay event before playing to ensure smooth playback
                    const playWhenReady = () => {
                        video.play().catch(e => console.log('Video play failed:', e));
                        video.removeEventListener('canplay', playWhenReady);
                    };
                    if (video.readyState >= 3) {
                        // Already has enough data
                        video.play().catch(e => console.log('Video play failed:', e));
                    } else {
                        video.addEventListener('canplay', playWhenReady);
                    }
                }
            } else {
                // Pause video when out of view to save resources
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, {
        // Start loading much earlier (800px before visible) for smoother playback
        rootMargin: '800px 0px',
        threshold: 0.05
    });

    // Observe any videos already in the DOM
    document.querySelectorAll('video').forEach(video => {
        videoObserver.observe(video);
    });

    // Expose observer so dynamically-created videos can register themselves
    window._videoObserver = videoObserver;
});

// Highlight active navigation link based on scroll position (throttled for performance)
let scrollTicking = false;
let cachedSections = null;
let cachedNavLinks = null;

function updateActiveNav() {
    if (!cachedSections) {
        cachedSections = document.querySelectorAll('.gallery-section, .abstract-section, .method-section');
        cachedNavLinks = document.querySelectorAll('.nav-link');
    }
    
    const scrollY = window.pageYOffset;
    let current = '';

    cachedSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    cachedNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
    
    scrollTicking = false;
}

window.addEventListener('scroll', function() {
    if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(updateActiveNav);
    }
}, { passive: true });

// Add active state styling for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        background-color: rgba(122, 40, 203, 0.15);
        color: #7A28CB;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Dynamic grid builder — creates lazy-loaded video items
function buildDynamicGrid(sectionId, data) {
    const section = document.querySelector(`#${sectionId} .interactive-grid`);
    if (!section || !data) return;

    data.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.className = 'gallery-item';
        gridItem.style.setProperty('--aspect-ratio', '16 / 9');

        const video = document.createElement('video');
        video.className = 'gallery-video';
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.preload = 'none';
        video.dataset.src = item.videoUrl;  // lazy — real src set by observer
        if (item.poster) video.poster = item.poster;

        const resDiv = document.createElement('div');
        resDiv.className = 'resolution';
        resDiv.textContent = item.duration || '5s';

        gridItem.appendChild(video);
        gridItem.appendChild(resDiv);

        if (item.prompt) {
            const overlay = document.createElement('div');
            overlay.className = 'prompt-overlay';
            overlay.textContent = item.prompt;
            gridItem.appendChild(overlay);
        }

        section.appendChild(gridItem);

        // Register with the global lazy-load observer
        if (window._videoObserver) {
            window._videoObserver.observe(video);
        }
    });
}

// Console message
console.log('%cAstrolabe Project Page', 'color: #7A28CB; font-size: 24px; font-weight: bold;');
console.log('%cSteering Forward-Process RL for Distilled AR Video Models', 'color: #00D2FF; font-size: 14px;');

// Casual Forcing video data
const CASUAL_FORCING_SHORT_VIDEOS = [
    'compare_2way_00006.mp4',
    'compare_2way_00007.mp4',
    'compare_2way_00014.mp4',
    'compare_2way_00018.mp4',
    'compare_2way_00027.mp4',
    'compare_2way_00035.mp4',
    'compare_2way_00039.mp4',
    'compare_2way_00050.mp4',
    'compare_2way_00103.mp4',
    'compare_2way_00284.mp4',
    'compare_2way_00410.mp4',
    'compare_2way_00420.mp4',
    'compare_2way_00842.mp4',
    'compare_2way_00843.mp4',
    'compare_2way_00898.mp4',
    'compare_2way_00918.mp4'
];

const CASUAL_FORCING_LONG_VIDEOS = [
    'compare_2way_00007 (1).mp4',
    'compare_2way_00015.mp4',
    'compare_2way_00027 (1).mp4',
    'compare_2way_00035 (1).mp4',
    'compare_2way_00075.mp4'
];

const CASUAL_FORCING_SCENE_CUT_VIDEOS = [
    'compare_2way_00001.mp4',
    'compare_2way_00002.mp4',
    'compare_2way_00003.mp4',
    'compare_2way_00005.mp4'
];

// Load casual_forcing videos into short-video section
document.addEventListener('DOMContentLoaded', function() {
    const shortVideoGrid = document.querySelector('#short-video .interactive-grid');
    if (shortVideoGrid) {
        CASUAL_FORCING_SHORT_VIDEOS.forEach((filename, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'fullwidth-video-item';

            const video = document.createElement('video');
            video.className = 'fullwidth-video';
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.controls = true;
            video.preload = 'none';
            video.dataset.src = `./assets/videos/casual_forcing/${filename}`;

            videoItem.appendChild(video);
            shortVideoGrid.appendChild(videoItem);

            if (window._videoObserver) {
                window._videoObserver.observe(video);
            }
        });
    }

    // Load casual_forcing videos into multi-prompt section
    const multiPromptGrid = document.querySelector('#multi-prompt .interactive-grid');
    if (multiPromptGrid) {
        CASUAL_FORCING_LONG_VIDEOS.forEach((filename, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'fullwidth-video-item';

            const video = document.createElement('video');
            video.className = 'fullwidth-video';
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.controls = true;
            video.preload = 'none';
            video.dataset.src = `./assets/videos/casual_forcing/${filename}`;

            videoItem.appendChild(video);
            multiPromptGrid.appendChild(videoItem);

            if (window._videoObserver) {
                window._videoObserver.observe(video);
            }
        });
    }

    // Load casual_forcing videos into multi-prompt-scene-cut section
    const sceneCutGrid = document.querySelector('#multi-prompt-scene-cut .interactive-grid');
    if (sceneCutGrid) {
        CASUAL_FORCING_SCENE_CUT_VIDEOS.forEach((filename, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'fullwidth-video-item';

            const video = document.createElement('video');
            video.className = 'fullwidth-video';
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.controls = true;
            video.preload = 'none';
            video.dataset.src = `./assets/videos/casual_forcing/${filename}`;

            videoItem.appendChild(video);
            sceneCutGrid.appendChild(videoItem);

            if (window._videoObserver) {
                window._videoObserver.observe(video);
            }
        });
    }
});

// Prompt data: video ID -> prompt text (based on MovieGenVideoBench.txt line numbers)
// 00000 = line 1, 00007 = line 8, etc.
const VIDEO_PROMPTS = {
    '011': "Extreme close up of a 24 year old woman's eye blinking, standing in Marrakech during magic hour, cinematic film shot in 70mm, depth of field, vivid colors, cinematic",
    '014': "A petri dish with a bamboo forest growing within it that has tiny red pandas running around.",
    '024': "A Chinese Lunar New Year celebration video with Chinese Dragon.",
    '039': "The Glenfinnan Viaduct is a historic railway bridge in Scotland, UK, that crosses over the west highland line between the towns of Mallaig and Fort William. It is a stunning sight as a steam train leaves the bridge, traveling over the arch-covered viaduct. The landscape is dotted with lush greenery and rocky mountains, creating a picturesque backdrop for the train journey. The sky is blue and the sun is shining, making for a beautiful day to explore this majestic spot.",
    '050': "A white cat driving in a car through a busy downtown street with tall buildings and pedestrians in the background",
    '074': "Close up shot of a living flame wisp darting through a bustling fantasy market at night.",
    '079': "FPV, internal locomotive cab of a train moving at hyper-speed in an old European city.",
    '104': "A giant humanoid, made of fluffy blue cotton candy, stomping on the ground, and roaring to the sky, clear blue sky behind them.",
    '106': "A cyclone of broken glass in an urban alleyway. dynamic movement.",
    '107': "A man standing in front of a burning building giving the 'thumbs up' sign.",
    '135': "humans walking into a dragon's open jaws descending into the underworld",
    '150': "A chimp on the sidewalk doing a backflip on a skateboard.",
    '193': "A truck rolling backwards down a hill while a family chases it with balloons and cakes in their arms.",
    '265': "A red panda taking a bite of a pizza",
    '275': "A cute golden dragon is walking like a model on stage, and the audience is clapping for him.",
    '297': "A female warrior rushes towards the camera, and suddenly she turns into a holographic monster.",
    '314': "A man is eating salad",
    '342': "A car is on fire and exploding.",
    '371': "A red bird transforms into a flag",
    '372': "A curtain transforms into a dancing girl",
    '383': "a photorealistic video of a butterfly that can swim navigating underwater through a beautiful coral reef",
    '386': "a walking figure made out of water tours an art gallery with many beautiful works of art in different styles",
    '387': "An ethereal moment as a figure is tethered to a majestic butterfly, soaring through a cosmic night filled with floating petals and vibrant colors, symbolizing the delicate balance between dreams and reality",
    '391': "Close-up of a majestic white dragon with pearlescent, silver-edged scales, icy blue eyes, elegant ivory horns, and misty breath. Focus on detailed facial features and textured scales, set against a softly blurred background",
    '400': "a tortoise whose body is made of glass, with cracks that have been repaired using kintsugi, is walking on a black sand beach at sunset",
    '410': "A dynamic motion shot of a paper airplane morphing into a swan. The pointed nose becomes a graceful neck and head, wings unfolding and expanding. The camera moves around as the flat surfaces gain volume, creases softening into feathers. The tail section splits into webbed feet. The transformation finishes as the swan's plumage turns pristine white, its beak forming from the paper's final fold.",
    '433': "A skeleton wearing a flower hat and sunglasses dances in the wild at sunset.",
    '484': "A hot air balloon descending back to the ground.",
    '491': "Flying cars zoom through a futuristic cityscape, maneuvering around towering skyscrapers while lights flicker on the buildings, creating a constantly shifting pattern.",
    '500': "A medieval castle overlooking a bustling renaissance fair.",
    '507': "A post-apocalyptic city overrun by nature, with vines covering buildings.",
    '538': "A vibrant carnival buzzes with activity as people enjoy rides, play games, and admire colorful lights, the energy and excitement filling the air.",
    '540': "A futuristic city park features holographic art installations, with people walking through, pausing to admire the digital displays that blend seamlessly with the natural surroundings.",
    '546': "People stroll along a vibrant city street, neon signs flashing and flickering overhead as cars pass by, and pedestrians weave through the bustling nightlife.",
    '565': "A fish driving a tiny submarine, exploring an underwater city.",
    '567': "A monkey dressed as an astronaut, floating in a space station while juggling bananas.",
    '575': "A butterfly in a tiny race car, speeding around a track made of flowers.",
    '586': "A zebra in a circus ringmaster's outfit, leading a parade of colorful performers.",
    '587': "A hedgehog in a knight's armor, riding a toy horse into a medieval castle.",
    '588': "An octopus playing multiple musical instruments simultaneously in an underwater band.",
    '594': "A person painting a sunset in the sky with a giant paintbrush.",
    '596': "A person playing a grand piano underwater in a crystal-clear lake.",
    '598': "A person knitting a scarf using beams of light instead of yarn.",
    '607': "A person fishing for stars in a night sky with a glowing fishing rod.",
    '617': "A person playing an electric guitar made of lightning, with thunderous sound waves.",
    '619': "A person conducting an orchestra of flowers, each playing a different musical note.",
    '620': "A person rowing a boat through a river of liquid gold, with shimmering banks.",
    '630': "A person holding an umbrella that turns rain into colorful confetti.",
    '635': "A person riding a giant tortoise through a desert of glass sand.",
    '636': "A person playing a drum set made of thunderclouds, with each beat creating a lightning flash.",
    '650': "Two people on roller skates colliding in a rink, both spinning out of control.",
    '679': "A surfer accelerating on a wave, carving through the water.",
    '690': "An astronaut fighting a large dinosaur",
    '692': "Macro shot of a man wearing an antique diving helmet with dark glass and a jetpack walking on lava as a dragon flies behind him in the sky. Realistic style",
    '753': "An arc shot around a bonfire on a beach at night, with friends laughing and dancing in the flickering light.",
    '761': "A first-person view of a surfer paddling out and catching a wave, the water rushing around them as they ride.",
    '776': "An over-the-shoulder shot of a photographer adjusting their camera, framing a beautiful sunset scene.",
    '836': "A zoom-out from a single person standing in the middle of a desert, revealing the expansive, empty sand dunes around them.",
    '843': "A pull-out from a dancer's feet moving gracefully, expanding to show the entire stage and audience.",
    '865': "Miniature adorable monsters made out of wool and felt, dancing with each other, 3d render, octane, soft lighting, dreamy bokeh, cinematic.",
    '897': "a toy robot wearing blue jeans and a white t shirt taking a pleasant stroll in Mumbai India during a winter storm",
    '902': "a toy robot wearing blue jeans and a white t shirt taking a pleasant stroll in Antarctica during a colorful festival",
    '945': "a woman wearing a green dress and a sun hat taking a pleasant stroll in Johannesburg South Africa during a winter storm",
    '959': "an adorable kangaroo wearing purple overalls and cowboy boots taking a pleasant stroll in Mumbai India during a colorful festival",
    '971': "an adorable kangaroo wearing a green dress and a sun hat taking a pleasant stroll in Johannesburg South Africa during a colorful festival"
};

// Merged comparison videos (each video contains 4 methods side by side)
const MERGED_COMPARISON_VIDEOS = [
    '011.mp4', '014.mp4', '024.mp4', '039.mp4', '050.mp4', '074.mp4', '079.mp4',
    '104.mp4', '106.mp4', '107.mp4', '135.mp4', '150.mp4', '193.mp4', '265.mp4', '275.mp4',
    '297.mp4', '314.mp4', '342.mp4', '371.mp4', '372.mp4', '383.mp4', '386.mp4', '387.mp4', '391.mp4', '400.mp4', '410.mp4',
    '433.mp4', '484.mp4', '491.mp4', '500.mp4', '507.mp4', '538.mp4', '540.mp4', '546.mp4', '565.mp4', '567.mp4',
    '575.mp4', '586.mp4', '587.mp4', '588.mp4', '594.mp4', '596.mp4', '598.mp4', '607.mp4', '617.mp4',
    '619.mp4', '620.mp4', '630.mp4', '635.mp4', '636.mp4', '650.mp4', '679.mp4', '690.mp4', '692.mp4', '753.mp4', '761.mp4',
    '776.mp4', '836.mp4', '843.mp4', '865.mp4', '897.mp4', '902.mp4', '945.mp4', '959.mp4', '971.mp4'
];

// Load merged comparison videos
document.addEventListener('DOMContentLoaded', function() {
    const comparisonContainer = document.getElementById('comparison-videos');
    if (!comparisonContainer) return;

    MERGED_COMPARISON_VIDEOS.forEach((filename, index) => {
        const videoId = filename.replace('.mp4', '');
        
        const videoItem = document.createElement('div');
        videoItem.className = 'fullwidth-video-item';

        const video = document.createElement('video');
        video.className = 'fullwidth-video';
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.controls = true;
        video.preload = 'none';
        video.dataset.src = `./assets/videos/comparisons_merged/${filename}`;

        videoItem.appendChild(video);
        
        // Add prompt overlay
        const prompt = VIDEO_PROMPTS[videoId];
        if (prompt) {
            const promptOverlay = document.createElement('div');
            promptOverlay.className = 'prompt-overlay';
            promptOverlay.innerHTML = `<i class="fas fa-quote-left"></i> ${prompt}`;
            videoItem.appendChild(promptOverlay);
        }

        comparisonContainer.appendChild(videoItem);

        if (window._videoObserver) {
            window._videoObserver.observe(video);
        }
    });
});
