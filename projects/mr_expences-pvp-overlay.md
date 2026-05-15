---
aside: false
sidebar: false
prev: false
next: false
title: Mr_Expence's PvP Overlay
---

<center>

<img src="../public/mr_expences-pvp-overlay/logo.png" width="700" alt="Mr_Expence's PvP Overlay Logo"><br>

## My custom vanilla Pvp Overlay for Minecraft with blue cobwebs and other features
<br>

<!-- Video -->
<div style="
width: 640px;
-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); /*ios 7 border-radius-bug */
-webkit-transform: rotate(0.000001deg); /*mac os 10.6 safari 5 border-radius-bug */
-webkit-border-radius: 10px; 
-moz-border-radius: 10px;
border-radius: 10px; 
overflow: hidden; 
">
<iframe loading="lazy" class="video__last-video" width="640" height="360" frameborder="0" title="Latest video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen src="https://www.youtube.com/embed/crty6HvsoHA?si=N7dhl1kPX4p6UFu0&amp;controls=0"></iframe>
</div><br><br><br>

<!-- Download links -->

<div style="display:inline-flex;gap:16px;flex-wrap:wrap">

<!-- Modrinth -->

<a href="https://modrinth.com/resourcepack/mr_expences-pvp-overlay" target="_blank" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:#1bd96a;font-weight:600">
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"/>
  </svg>
  View on Modrinth
</a>

<!-- Download Button -->

<a id="download-btn" href="#" download 
   style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:#41b3fe;font-weight:600">
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#41b3fe">
    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
  </svg>
  Download
</a>

<!-- Download Script -->

<script>
  if (typeof document !== 'undefined') {
    // Replace fetch('https://api.modrinth.com/v2/project/ID/version')
    fetch('https://api.modrinth.com/v2/project/sVLvrrSv/version')
      .then(response => response.json())
      .then(versions => {
        const latestVersion = versions[0];
        const downloadUrl = latestVersion.files[0].url;
        document.getElementById('download-btn').href = downloadUrl;
      });
  }
</script>

<!-- Curseforge -->

<a href="https://www.curseforge.com/minecraft/texture-packs/mr-expences-pvp-overlay" target="_blank" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:#f16436;font-weight:600">
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path d="M18.326 9.2145S23.2261 8.4418 24 6.1882h-7.5066V4.4H0l2.0318 2.3576V9.173s5.1267-.2665 7.1098 1.2372c2.7146 2.516-3.053 5.917-3.053 5.917L5.0995 19.6c1.5465-1.4726 4.494-3.3775 9.8983-3.2857-2.0565.65-4.1245 1.6651-5.7344 3.2857h10.9248l-1.0288-3.2726s-7.918-4.6688-.8336-7.1127z"/>
  </svg>
  View on CurseForge
</a>

</div>

My custom PvP overlay for Minecraft Inspired by TheobaldTheBird's Bare Bones PVP Texture Pack

Customizable with Resource Pack Options



Features:

Ore outlines

Short swords

Small fishing bobber

High visibility webs

High visibility dripstone

Smaller utilities

Bow charge indicator

Low fire

Visible powdered snow

Low shield

No explosion particles

Alternate Totem of Undying

Alternate Totem of Undying sound

Small Totem Particles

Small Effect Particles

Clearer water

Sword enchantments (Fire Aspect and Knockback)

3D mace enchantments (Breach and Density)
<br><br><br>

<img src="../public/mr_expences-pvp-overlay/blue_fire_sword.png" width="600" alt="Blue Fire Aspect Sword"><br><br>
<img src="../public/mr_expences-pvp-overlay/bobber.png" width="600" alt="Small Fishing Bobber"><br><br>
<img src="../public/mr_expences-pvp-overlay/fire.png" width="600" alt="Low Fire"><br><br>
<img src="../public/mr_expences-pvp-overlay/fire_sword.png" width="600" alt="Fire Aspect Sword"><br><br>
<img src="../public/mr_expences-pvp-overlay/knockback_sword.png" width="600" alt="Knockback Sword"><br><br>
<img src="../public/mr_expences-pvp-overlay/mace_one.png" width="600" alt="3D Mace Enchantment"><br><br>
<img src="../public/mr_expences-pvp-overlay/pop.png" width="600" alt="Totem Pop Effect"><br><br>
<img src="../public/mr_expences-pvp-overlay/totem.png" width="600" alt="Alternate Totem of Undying"><br><br>
<img src="../public/mr_expences-pvp-overlay/webs.png" width="600" alt="High Visibility Webs"><br><br>
</center>