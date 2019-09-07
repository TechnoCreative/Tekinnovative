class ErreursController < ::ApplicationController
  skip_before_action :verify_authenticity_token, only: [:erreur_interne]

  def page_introuvable
    # On envoie le mail
    Erreurs404500mailer.envoi_erreur_404(request, session).deliver

    # Et on affiche de jolies erreurs
    respond_to do |format|
      if defined?(UTILISER_CHARTE) && UTILISER_CHARTE
        # Ici on utilise Rails.root pour remonter dans l'application qui utilise la gem, et on va chercher la page statique des 404
        format.html { render "#{Rails.root}/public/erreur_404.html", layout: false, status: 404 }
      else
        # Sinon on utilise le template de ce controleur de manière générique (le fichier 404.html présent dans public/ quand on créé un projet Rails, par exemple)
        format.html { render template: "erreurs/page_introuvable", layout: false, status: 404 }
      end
      format.all  { render nothing: true, status: 404 }
    end
  end

  # La même pour les 500
  def erreur_interne
    exception = env['action_dispatch.exception']
    Erreurs404500mailer.envoi_erreur_500(request, session, exception).deliver

    respond_to do |format|
      if defined?(UTILISER_CHARTE) && UTILISER_CHARTE
        format.html { render "#{Rails.root}/public/erreur_500.html", layout: false, status: 500 }
      else
        format.html { render  template: "erreurs/erreur_interne", layout: false, status: 500 }
      end
      format.all  { render nothing: true, status: 500 }
    end
  end
end