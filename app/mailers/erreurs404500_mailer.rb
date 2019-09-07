class Erreurs404500mailer < ActionMailer::Base
  def envoi_erreur_404(requete, session)
    @nom_application = NOM_APPLICATION
    @requete = requete
    @session = session
    
    # Une petite astuce si vous avez une delivery_method mailjet par exemple
    #ActionMailer::Base.delivery_method = :smtp if ...

    mail(to: "web@groupebatteur.fr", subject: "[#{@nom_application}] Erreur 404", from: "")

    # Bien remettre mailjet sinon les prochains mails partiront avec le smtp du serveur
    ActionMailer::Base.delivery_method = :mailjet if ...
  end

  # Pareil pour les 500
  def envoi_erreur_500(requete, session, exception)
    @nom_application = NOM_APPLICATION
    @requete = requete
    @session = session
    
    @exception = exception

    #ActionMailer::Base.delivery_method = :smtp if ...

    mail(to: "web@groupebatteur.fr", subject: "[#{@nom_application}] Erreur 500", from: "")

    #ActionMailer::Base.delivery_method = :mailjet if ...
  end
end